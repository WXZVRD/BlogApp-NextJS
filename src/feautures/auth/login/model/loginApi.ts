import { api } from "@/shared/api/axiosInstance";
import { IAuthDataRespose } from "@/feautures/auth/signin/types";
import {LoginFormData} from "@/feautures/auth/login/model/validation";

export const loginApi = async (data: LoginFormData): Promise<IAuthDataRespose> => {
    const response = await api.post('/auth/login', data);
    return response.data;
};