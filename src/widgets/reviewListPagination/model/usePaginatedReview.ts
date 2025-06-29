import { useQuery } from '@tanstack/react-query';
import { api } from '@/shared/api/axiosInstance';
import {ReviewFilterParams} from "@/feautures/filters/types";

export const usePaginatedReviews = (filters: ReviewFilterParams) => {
    return useQuery({
        queryKey: ['reviews', filters],
        queryFn: async () => {
            const res = await api.get('/review/search', {
                params: {
                    page: filters.page,
                    take: filters.take,
                },
            });
            return res.data;
        },
    });
};
