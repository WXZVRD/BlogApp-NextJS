import { useMutation } from "@tanstack/react-query";
import { putRating } from "../api/putRating";

export const usePutReviewRating = () => {
    return useMutation({
        mutationFn: ({
                         userId,
                         reviewId,
                         value,
                     }: { userId: number; reviewId: number; value: number }) => {
            console.log("🚀 Отправка рейтинга:", { userId, reviewId, value });
            return putRating(userId, reviewId, value);
        },
    });
};
