import {Avatar, AvatarFallback, AvatarImage} from "@/shared/ui/Avatar/avatar";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem} from "@/shared/ui/DropdownMenu/dropdown-menu";
import SignOutButton from "@/feautures/auth/logout/ui/SignOutButton";
import ThemeSwitcher from "@/feautures/theme/ui/ThemeSwitcher";
import {useRoute} from "@/shared/hooks/useRoute";
import {useAuth} from "@/shared/hooks/useAuth";


export default function UserMenu() {
    const { user } = useAuth()
    const goTo = useRoute()


    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.avatarUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => goTo('/profile')}>Profile</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => goTo('/reviews/create')}>New review</DropdownMenuItem>
                { user?.role === 'admin' && (
                    <>
                        <DropdownMenuItem onSelect={() => goTo('/admin')}>Admin Panel</DropdownMenuItem>
                    </>
                )}
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <ThemeSwitcher/>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SignOutButton/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}