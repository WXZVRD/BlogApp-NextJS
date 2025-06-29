import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/api/axiosInstance";

export const useAddComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: {
            reviewId: number;
            authorId: number;
            content: string
        }) => {
            const res = await api.post("/comment/create", data);
            return res.data;
        },
        onSuccess: (_, { reviewId }) => {
            queryClient.invalidateQueries(["review-comments", reviewId]);
        },
    });
};
