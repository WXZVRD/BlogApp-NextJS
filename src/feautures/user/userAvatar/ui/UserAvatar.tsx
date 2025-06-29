"use client";

import {ChangeEvent, useRef} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/shared/ui";
import {ImageIcon, Loader2} from "lucide-react";
import {useAuth} from "@/shared/hooks/useAuth";
import {uploadFile} from "@/feautures/uploader/api/uploaderApi";
import {useUpdateUser} from "@/entities/user/model/useUpdateUser";
import {IUser} from "@/entities/user/types";

export function UserAvatar({ fallback }: { fallback: string }) {
    const { user, setUser } = useAuth()
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { mutate: updateUserData, isPending } = useUpdateUser();

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && user?.id) {
            const data = await uploadFile(file);

            setUser((prev: IUser) => {
                return { ...prev, avatarUrl: data.url };
            });

            updateUserData({
                data: { avatarUrl: data.url },
                userId: user.id,
            });
        }
    };

    return (
        <div className="relative group cursor-pointer">
            <Avatar className="w-24 h-24">
                <AvatarImage src={user?.avatarUrl} />
                <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                {isPending ? (
                    <Loader2 className="animate-spin text-white w-6 h-6" />
                ) : (
                    <ImageIcon className="text-white w-6 h-6" />
                )}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />

            <button
                type="button"
                className="absolute inset-0"
                onClick={() => fileInputRef.current?.click()}
            />
        </div>
    );
}
