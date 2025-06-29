import axios, {AxiosInstance} from "axios";
import {getTokens} from "@/shared/utils/tokensUtils";


export const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

api.interceptors.request.use(async function (config) {
    const tokens = getTokens();
    if (tokens && tokens.accessToken) {
        config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
}, function (error) {
    return error;
})