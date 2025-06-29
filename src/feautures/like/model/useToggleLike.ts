import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/api/axiosInstance";

export const useToggleLike = () => {
    return useMutation({
        mutationFn: async ({ userId, reviewId }: { userId: number; reviewId: number }) => {
            const res = await api.post('/review/toggle-like', {
                userId,
                reviewId,
            });
            return res.data;
        },
    });
};
