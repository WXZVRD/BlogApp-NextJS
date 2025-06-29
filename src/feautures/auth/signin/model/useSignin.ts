import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, SigninFormData } from "./validation";
import {signinApi} from "@/feautures/auth/signin/model/signinApi";
import {setTokens} from "@/shared/utils/tokensUtils";
import {catchFormError} from "@/shared/utils/catchFormError";
import {useAuth} from "@/shared/hooks/useAuth";
import {IAuthDataRespose} from "@/feautures/auth/signin/types";
import {useRoute} from "@/shared/hooks/useRoute";

export function useSignin() {
    const { user, setUser } = useAuth()
    const goTo = useRoute()

    const form = useForm<SigninFormData>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        },
    });

    async function onSubmit(data: SigninFormData) {
        try {
            const signinData: IAuthDataRespose = await signinApi(data);

            setTokens({
                accessToken: signinData.accessToken,
                refreshToken: signinData.refreshToken,
            });

            setUser(signinData.user);
            goTo('/')
        } catch (e: any) {
            const errorMessage = e?.response?.data?.message || "Ошибка авторизации";

            const { target, message } = catchFormError<keyof SigninFormData>(
                errorMessage, ["email", "password", "firstName", "lastName"] as const
            );

            form.setError(target, {
                message,
            });
        }
    }

    return {
        form,
        onSubmit
    };
}
