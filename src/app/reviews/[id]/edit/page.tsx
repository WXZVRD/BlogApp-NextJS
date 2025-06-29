'use client'
import {useReviewById} from "@/widgets/review-full/model/useReviewById";
import {useUpdateReview} from "@/feautures/review/create/model/useUpdateReview";
import {ReviewForm} from "@/feautures/review/create/ui/ReviewCreateForm";
import {use} from "react";

export default function EditReviewPage({
                                           params,
                                       }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const reviewId = Number(id)
    const { data, isLoading } = useReviewById(Number(reviewId));
    const { mutate, isPending } = useUpdateReview();

    if (isLoading) return <div>Loading...</div>;

    return (
        <ReviewForm
            mode="edit"
            initialData={data}
            isPending={isPending}
            onSubmit={(formData) => mutate({ reviewId, ...formData })}
        />
    );
}
