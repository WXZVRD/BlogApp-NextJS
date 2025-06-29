'use client'
import Link from "next/link";
import { Button, Container } from "@/shared/ui";
import UserMenu from "@/feautures/user/ui/UserMenu";
import {useAuth} from "@/shared/hooks/useAuth";
import SearchInput from "@/feautures/fullTextSearch/ui/SearchInput";

export default function Header() {
    const { user } = useAuth()

    return (
        <header className="bg-white dark:bg-[#1E1E1E] shadow-sm sticky top-0 z-50">
            <Container>
                <div className="container mx-auto flex items-center justify-between py-4 px-6">

                    <nav className="flex items-center space-x-6">
                        <Link href="/"
                              className="mr-20 font-extrabold text-gray-600 dark:text-white transition-colors">
                            WXZVRD
                        </Link>

                        <Link href="/" className="text-gray-600 dark:text-white  transition-colors">
                            Home
                        </Link>
                        <Link href="/reviews"
                              className=" no-underline focus:outline-none focus:ring-0 text-gray-600 dark:text-white transition-colors">
                            Reviews
                        </Link>
                    </nav>

                    <SearchInput/>

                    <div className="flex items-center space-x-6">
                        {user ? (
                            <>
                                <UserMenu/>
                            </>
                        ) : (
                            <>
                                <Link href="/auth/sign-in" className=" no-underline focus:outline-none focus:ring-0 text-gray-600 dark:text-white transition-colors">
                                    <Button variant="outline" className="ml-2">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/auth/login" className=" no-underline focus:outline-none focus:ring-0 text-gray-600 dark:text-white transition-colors">
                                    <Button>
                                        Log In
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
}
