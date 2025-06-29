import {Comment} from "@/entities/comment/model/types";
import {api} from "@/shared/api/axiosInstance";

export const fetchComments = async (reviewId: number): Promise<Comment[]> => {
    const response = await api.get(`/comment/${reviewId}`);
    return response.data;
};