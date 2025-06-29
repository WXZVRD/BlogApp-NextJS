import { SigninFormData } from "@/feautures/auth/signin/model/validation";
import { api } from "@/shared/api/axiosInstance";
import { IAuthDataRespose } from "@/feautures/auth/signin/types";

export const signinApi = async (data: SigninFormData): Promise<IAuthDataRespose> => {
    const response = await api.post('/auth/register', data);
    return response.data;
};