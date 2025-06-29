import { useQuery } from "@tanstack/react-query";
import {fetchReviewById} from "@/entities/review/api/fetchById";

export const useReviewById = (id: number) => {
    return useQuery({
        queryKey: ["review", id],
        queryFn: () => fetchReviewById(id),
        enabled: !!id,
    });
};
