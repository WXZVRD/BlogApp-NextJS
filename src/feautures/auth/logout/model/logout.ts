import {clearTokens} from "@/shared/utils/tokensUtils";
import {useAuth} from "@/shared/hooks/useAuth";
import {toast} from "sonner";

export function useLogout() {
    const { setUser } = useAuth();

    return () => {
        clearTokens();
        setUser(null);
        toast("You have been logged out.")
    };
}