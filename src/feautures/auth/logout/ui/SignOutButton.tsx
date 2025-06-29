import {Button} from "@/shared/ui";
import {useLogout} from "@/feautures/auth/logout/model/logout";
import {useRoute} from "@/shared/hooks/useRoute";

export default function SignOutButton() {
    const logout = useLogout()
    const goTo = useRoute()

    return(
        <Button size="sm" onClick={() => {
            logout()
            goTo("/")
        }} variant="destructive">
            Sign Out
        </Button>
    )
}