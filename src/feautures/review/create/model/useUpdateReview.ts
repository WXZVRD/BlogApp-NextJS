import { useMutation } from "@tanstack/react-query";
import {updateReview} from "@/feautures/review/create/api/updateReview";

export const useUpdateReview = () => {
    return useMutation({
        mutationFn: updateReview,
    });
};
