'use client'

import { CheckCircle, Github } from "lucide-react";
import { Button } from "@/shared/ui";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useAuth} from "@/shared/hooks/useAuth";
import {setTokens} from "@/shared/utils/tokensUtils";
import {toast} from "sonner";

export default function SuccessPage() {
    const searchParams = useSearchParams()
    const { user, setUser } = useAuth()

    useEffect(() => {
        const rawUser = searchParams.get('user');
        const user = rawUser ? JSON.parse(rawUser) : null;

        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken');

        if (accessToken && refreshToken) {
            setTokens({accessToken, refreshToken});
        }

        setUser(user)
        toast("Successfully login by Github!")
    }, [searchParams])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4"/>
            <h1 className="text-3xl font-bold mb-2">Успешная авторизация!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Вы вошли в систему через GitHub
            </p>

            <div className="flex items-center justify-center gap-2 mb-8">
                <Github className="w-6 h-6 text-black dark:text-white"/>
                <span className="text-lg font-medium">GitHub</span>
            </div>

            <Link href="/">
                <Button
                    className="px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-md transition-all">
                    Перейти на главную
                </Button>
            </Link>
        </div>
    );
}
