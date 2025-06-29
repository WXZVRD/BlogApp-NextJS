'use client';

import { useParams } from "next/navigation";
import { ReviewFull } from "@/widgets/review-full/ui/ReviewFull";

export default function ReviewPage() {
    const params = useParams();

    console.log("📦 useParams:", params);

    const reviewId = Number(params?.id);

    if (!reviewId) {
        console.warn("⚠️ Не удалось получить reviewId из URL");
        return <div>Loading...</div>;
    }

    return <ReviewFull id={reviewId} />;
}
