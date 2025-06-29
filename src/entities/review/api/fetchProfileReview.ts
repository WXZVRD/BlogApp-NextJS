import {IReview} from "@/entities/review/types";
import {api} from "@/shared/api/axiosInstance";


export const fetchProfileReview = async (url: string): Promise<IReview[]> => {
    const response = await api.get(url);

    return response.data;
};