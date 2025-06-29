import { useQuery } from "@tanstack/react-query";
import {fetchComments} from "@/feautures/comment/getByReview/api/getCommentByReview";

export const useGetCommentsByReview = (reviewId: number) => {
    return useQuery({
        queryKey: ["review-comments", reviewId],
        queryFn: () => fetchComments(reviewId),
        enabled: !!reviewId,
    });
};
