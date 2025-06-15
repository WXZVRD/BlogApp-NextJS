import {useQuery} from "@tanstack/react-query";
import {fetchReview} from "@/entities/review/api/fetchReview";


export const useReview = (url: string) => {

    return useQuery({
        queryKey: ['review', url],
        queryFn: () => fetchReview(url),
        staleTime: 60_000,
    })
}