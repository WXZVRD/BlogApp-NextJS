import {IUser} from "@/entities/user/types";

export interface IAuthDataRespose {
    user: IUser
    accessToken: string;
    refreshToken: string;
}