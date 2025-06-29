'use client';

import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Button
} from "@/shared/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadCloud } from "lucide-react";
import { z } from "zod";
import dynamic from "next/dynamic";
import { uploadFile } from "@/feautures/uploader/api/uploaderApi";
import { useMemo, useEffect } from "react";
import WorkTypeSelector from "@/feautures/work/ui/WorkTypeSelector";
import WorkSearchInput from "@/feautures/work/ui/WorkSearchInput";

const formCreateSchema = z.object({
    cover: z.string().url(),
    title: z.string().min(3),
    content: z.string().min(10),
    authorId: z.number(),
    workData: z.object({
        id: z.number(),
        title: z.string(),
        cover: z.string(),
        type: z.enum(["book", "film", "game"]),
        rating: z.number(),
    }),
});

const formUpdateSchema = z.object({
    cover: z.string().url(),
    title: z.string().min(3),
    content: z.string().min(10),
});

type FormCreateData = z.infer<typeof formCreateSchema>;
type FormUpdateData = z.infer<typeof formUpdateSchema>;

type FormData = FormCreateData & {
    workData: FormCreateData["workData"];
};

type Props = {
    mode: "create" | "edit";
    initialData?: Partial<FormData>;
    onSubmit: (data: FormData) => void;
    isPending?: boolean;
};

export function ReviewForm({ mode, initialData, onSubmit, isPending }: Props) {
    const MDEditor = useMemo(() => dynamic(() => import("@uiw/react-md-editor"), { ssr: false }), []);

    const form = useForm<FormData>({
        resolver: zodResolver(
            mode === "edit" ? (formUpdateSchema as any) : formCreateSchema
        ),
        defaultValues: initialData || {
            title: "",
            content: "",
            cover: "",
            authorId: 0,
            workData: {
                id: 0,
                title: "",
                cover: "",
                type: "book",
                rating: 0,
            },
        },
    });

    useEffect(() => {
        if (initialData) form.reset(initialData);
    }, [initialData]);

    const watchType = form.watch("workData.type");

    const onChangeCover = async (file?: File) => {
        if (!file) return;
        const res = await uploadFile(file);
        form.setValue("cover", res.url);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => {
                    console.log("✅ Submit сработал:", data);
                    onSubmit(data);
                }, (errors) => {
                    console.log("❌ Ошибки валидации:", errors);
                })}
                className="space-y-6"
            >
                {/* Cover */}
                <FormField
                    control={form.control}
                    name="cover"
                    render={() => (
                        <FormItem>
                            <FormLabel>Cover</FormLabel>
                            <FormControl>
                                <div className="flex items-center gap-4">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => onChangeCover(e.target.files?.[0])}
                                    />
                                    <UploadCloud className="w-5 h-5 text-muted-foreground"/>
                                </div>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} value={field.value ?? ''} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Type + Work (только для create) */}
                {mode !== "edit" && (
                    <>
                        <FormField
                            control={form.control}
                            name="workData.type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <FormControl>
                                        <WorkTypeSelector field={field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormItem>
                            <FormLabel>Work</FormLabel>
                            <FormControl>
                                <WorkSearchInput
                                    type={watchType}
                                    onSelect={(work) => {
                                        form.setValue("workData", {
                                            ...form.getValues("workData"),
                                            id: work.id,
                                            title: work.name,
                                            cover: work.background_image,
                                        });
                                    }}
                                />
                            </FormControl>
                        </FormItem>
                    </>
                )}

                {/* Content */}
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <div data-color-mode="dark">
                                    <MDEditor value={field.value} onChange={field.onChange} preview="live" height={300} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {mode !== "edit" && (
                    <FormField
                        control={form.control}
                        name="workData.rating"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rating</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={1}
                                        max={5}
                                        value={field.value ?? ''}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            field.onChange(isNaN(value) ? '' : value);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <div className="flex justify-end gap-2">
                    <Button variant="outline" type="button" onClick={() => window.history.back()}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending}>
                        {mode === "edit" ? "Save changes" : "Publish Review"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
