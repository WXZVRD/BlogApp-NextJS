'use client';

import { ThemeProvider } from "@/shared/providers/ThemeProvider";
import ReactQueryProvider from "@/shared/providers/ReqctQueryProvider";
import { Header, Container } from "@/shared/ui";

export default function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                <Container>{children}</Container>
            </ThemeProvider>
        </ReactQueryProvider>
    );
}
