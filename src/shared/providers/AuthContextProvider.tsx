'use client'

import { Context, createContext, ReactNode, useEffect, useState } from "react";
import { IUser } from "@/entities/user/types";
import { clearTokens, getTokens, setTokens } from "@/shared/utils/tokensUtils";
import { api } from "@/shared/api/axiosInstance";

interface AuthContextType {
    user: IUser | null
    setUser: (user: any) => void
}

export const AuthContext: Context<AuthContextType | undefined> = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        if (!user) {
            const tokens = getTokens()

            async function authMe() {
                try {
                    if (!tokens?.refreshToken) {
                        return
                    }

                    const response = await api.get('/auth/me', {
                        params: {
                            refreshToken: tokens.refreshToken,
                        }
                    })

                    const { user, accessToken, refreshToken } = response.data

                    setUser(user)
                    setTokens({ accessToken, refreshToken })

                } catch (error) {
                    clearTokens()
                    setUser(null)
                }
            }

            authMe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}
