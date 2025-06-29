'use client'

import {
    Form, FormField, FormItem, FormLabel, FormControl, Input, FormMessage, Button, Separator
} from "@/shared/ui";
import { Github, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLogin } from "../model/useLogin";
import Link from "next/link";

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { form, onSubmit } = useLogin();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        {...field}
                                        className="pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(prev => !prev)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">Submit</Button>

                <Separator />

                <Link href="http://localhost:3000/auth/github">
                    <Button type="button" variant="outline" className="w-full flex gap-2 justify-center">
                        <Github className="w-4 h-4" />
                        Войти через GitHub
                    </Button>
                </Link>
            </form>
        </Form>
    )
}
