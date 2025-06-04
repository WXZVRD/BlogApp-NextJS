'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Container} from "@/components/ui/Container";

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <Container>
                <div className="container mx-auto flex items-center justify-between py-4 px-6">

                    <nav className="flex items-center space-x-6">
                        <Link href="/"
                              className="mr-20 font-extrabold text-2xl text-gray-900 hover:text-indigo-600 transition-colors">
                            Your Logo
                        </Link>

                        <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/reviews"
                              className="hover:text-indigo-600 no-underline focus:outline-none focus:ring-0 text-gray-700 hover:text-indigo-600 transition-colors">
                            Reviews
                        </Link>
                    </nav>

                    <Input
                        type="text"
                        placeholder="Full text search..."
                        className="w-64 max-w-xs"
                    />

                    <div className="flex items-center space-x-6">
                        <Button variant="outline" className="ml-2">
                            Sign In
                        </Button>
                        <Button>
                            Log In
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
