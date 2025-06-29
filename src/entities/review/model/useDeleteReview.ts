import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview } from "../api/deleteReview";
import { toast } from "sonner";

export function useDeleteReview() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (reviewId: number) => deleteReview(reviewId),
        onSuccess: () => {
            toast.success("Review deleted");
            queryClient.invalidateQueries({ queryKey: ["profile-reviews"] });
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message || "Failed to delete review-full");
        },
    });
}
