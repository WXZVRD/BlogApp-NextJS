'use client';

import {ReviewListWithPagination} from "@/widgets/reviewListPagination/ui/ReviewListWithPagination";

export default function ReviewsPage() {
    return (
        <div className="container py-10 space-y-8">
            <ReviewListWithPagination />
        </div>
    );
};
