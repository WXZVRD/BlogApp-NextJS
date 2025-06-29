import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {setTokens} from "@/shared/utils/tokensUtils";
import {catchFormError} from "@/shared/utils/catchFormError";
import {useAuth} from "@/shared/hooks/useAuth";
import {IAuthDataRespose} from "@/feautures/auth/signin/types";
import {useRoute} from "@/shared/hooks/useRoute";
import {loginApi} from "@/feautures/auth/login/model/loginApi";
import {LoginFormData, loginSchema} from "@/feautures/auth/login/model/validation";

export function useLogin() {
    const { user, setUser } = useAuth()
    const goTo = useRoute()

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(data: LoginFormData) {
        try {
            const loginData: IAuthDataRespose = await loginApi(data);

            setTokens({
                accessToken: loginData.accessToken,
                refreshToken: loginData.refreshToken,
            });

            setUser(loginData.user);
            goTo('/')
        } catch (e: any) {
            const errorMessage = e?.response?.data?.message || "Ошибка авторизации";

            const { target, message } = catchFormError<keyof LoginFormData>(
                errorMessage, ["email", "password"] as const
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
