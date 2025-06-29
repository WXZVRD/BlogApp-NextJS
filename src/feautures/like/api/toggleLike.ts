import { api } from "@/shared/api/axiosInstance";

type ToggleLikeParams = {
    userId: number;
    reviewId: number;
};

export const toggleLike = async ({ userId, reviewId }: ToggleLikeParams): Promise<void> => {
    try {
        await api.post("/review/toggle-like", {
            userId,
            reviewId,
        });
    } catch (error) {
        throw error;
    }
};
