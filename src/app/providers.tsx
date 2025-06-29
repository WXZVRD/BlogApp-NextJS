'use client';

import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import ReactQueryProvider from "@/shared/providers/ReqctQueryProvider";
import { Header, Container } from "@/shared/ui";
import AuthProvider from "@/shared/providers/AuthContextProvider";

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <AuthProvider>
                    <Header />
                    <Container>{children}</Container>
                </AuthProvider>
            </ThemeProvider>
        </ReactQueryProvider>
    );
}
