import {Button} from "@/shared/ui/index";
import {useRoute} from "@/shared/hooks/useRoute";

export default function SignOutButton() {
    const goTo = useRoute()

    return(
        <Button onClick={() => goTo("/auth/login")} variant="destructive">
            Sign Out
        </Button>
    )
}