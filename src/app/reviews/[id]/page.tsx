'use client';

import { useParams } from "next/navigation";
import { ReviewFull } from "@/widgets/review-full/ui/ReviewFull";

export default function ReviewPage() {
    const params = useParams();

    const reviewId = Number(params?.id);

    if (!reviewId) {
        return <div>Loading...</div>;
    }

    return <ReviewFull id={reviewId} />;
}
