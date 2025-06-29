import { api } from "@/shared/api/axiosInstance";

export const putRating = async (userId: number, reviewId: number, value: number) => {
    try {
        const res = await api.post("/rating/rate-review", {
            userId,
            targetId: reviewId,
            targetType: "review",
            value,
        });

        return res.data;
    } catch (e) {
        throw e;
    }
};
