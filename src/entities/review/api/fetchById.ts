import {api} from "@/shared/api/axiosInstance";

export const fetchReviewById = async (id: number): Promise<any> => {
    const res = await api.get(`/review/screen/${id}`);
    return res.data;
};
