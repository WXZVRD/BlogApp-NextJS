import { api } from "@/shared/api/axiosInstance";

export const deleteReview = async (reviewId: number): Promise<void> => {
    await api.delete(`/review/${reviewId}`);
};
