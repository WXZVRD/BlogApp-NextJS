'use client';

import ReviewCard from '@/entities/review/ui/ReviewCard';
import { usePaginatedReviews } from '@/widgets/reviewListPagination/model/usePaginatedReview';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/shared/ui";
import {useReviewFilters} from "@/feautures/filters/model/useReviewFilters";

export const ReviewListWithPagination = () => {
    const filters = useReviewFilters();
    const { data, isLoading } = usePaginatedReviews(filters);

    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = filters.page || 1;
    const itemsPerPage = filters.take || 9;
    const totalPages = Math.ceil(data?.total / itemsPerPage || 1);

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(page));
        router.push(`/reviews?${params.toString()}`);
    };

    if (isLoading) return <div>Загрузка...</div>;

    const renderPageNumbers = () => {
        const pages: number[] = [];
        const maxPagesToShow = 5;
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, start + maxPagesToShow - 1);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages.map((page) => (
            <PaginationItem key={page}>
                <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                    href="#"
                >
                    {page}
                </PaginationLink>
            </PaginationItem>
        ));
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.data.map((review: any) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>

            <Pagination>
                <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => handlePageChange(currentPage - 1)}
                            />
                        </PaginationItem>
                    )}

                    {renderPageNumbers()}

                    {currentPage < totalPages && (
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => handlePageChange(currentPage + 1)}
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
};
