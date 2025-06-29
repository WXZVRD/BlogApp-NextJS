import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/api/axiosInstance";
import { IReview } from "@/entities/review/types";

export const useProfileReview = (authorId?: number) => {
    return useQuery<IReview[]>({
        queryKey: ['profile-reviews', authorId],
        queryFn: async () => {
            if (!authorId) return [];
            const res = await api.get(`/review/author/${authorId}`);

            return res.data;
        },
        enabled: !!authorId,
        staleTime: 60_000,
    });
};
