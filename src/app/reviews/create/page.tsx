'use client'
import { useAuth } from '@/shared/hooks/useAuth';
import {useCreateReview} from "@/feautures/review/create/model/useCreateReview";
import {ReviewForm} from "@/feautures/review/create/ui/ReviewCreateForm";

export default function CreateReviewsPage() {
    const { user } = useAuth();
    const { mutate, isPending } = useCreateReview();

    return (
        <ReviewForm
            mode="create"
            isPending={isPending}
            initialData={{ authorId: user?.id || 0 }}
            onSubmit={(data) => mutate(data)}
        />
    );
}
