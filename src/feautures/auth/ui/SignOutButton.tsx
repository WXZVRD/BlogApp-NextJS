import {Button} from "@/shared/ui";
import {useRoute} from "@/shared/hooks/useRoute";

export default function SignOutButton() {
    const goTo = useRoute()

    return(
        <Button size="sm" onClick={() => goTo("/auth/login")} variant="destructive">
            Sign Out
        </Button>
    )
}