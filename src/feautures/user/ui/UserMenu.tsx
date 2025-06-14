import {Avatar, AvatarFallback, AvatarImage} from "@/shared/ui/Avatar/avatar";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem} from "@/shared/ui/DropdownMenu/dropdown-menu";
import SignOutButton from "@/feautures/auth/ui/SignOutButton";
import useUser from "@/feautures/user/hooks/useUser";
import ThemeSwitcher from "@/feautures/theme/ui/ThemeSwitcher";
import {useRoute} from "@/shared/hooks/useRoute";


export default function UserMenu() {
    const [ user ] = useUser()
    const goTo = useRoute()


    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => goTo('/profile')}>Profile</DropdownMenuItem>
                { user.isAdmin && (
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