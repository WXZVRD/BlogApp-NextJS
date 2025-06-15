'use client'
import Link from "next/link";
import { Button, Input, Container } from "@/shared/ui/index";
import useUser from "@/feautures/user/hooks/useUser";
import UserMenu from "@/feautures/user/ui/UserMenu";

export default function Header() {
    const [ isLoggedIn ] = useUser()

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

                    <Input
                        type="text"
                        placeholder="Full text search..."
                        className="w-64 max-w-xs"
                    />

                    <div className="flex items-center space-x-6">
                        {isLoggedIn ? (
                            <>
                                <UserMenu/>
                            </>
                        ) : (
                            <>w
                                <Button variant="outline" className="ml-2">
                                    Sign In
                                </Button>
                                <Button>
                                    Log In
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
}
