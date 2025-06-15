'use client';

import { useState } from "react";
import { Button } from "@/shared/ui";
import { motion, AnimatePresence } from "framer-motion";
import { IReview } from "@/entities/review/types";
import ReviewCard from "@/entities/review/ui/ReviewCard";
import { useReview } from "@/entities/review/model/useReview";
import ReviewCardSkeleton from "@/entities/review/ui/ReviewCardSkeleton";

interface IBlogSection {
    title: string;
    onViewAll: () => void;
    fetchUrl: string;
}

export default function BlogSection({ title, onViewAll, fetchUrl }: IBlogSection) {
    const { data: reviews = [], isLoading, isError } = useReview(fetchUrl);
    const [visibleCount, setVisibleCount] = useState<number>(3);

    const handleShowMore = () => {
        if (visibleCount >= reviews.length) {
            onViewAll();
        } else {
            setVisibleCount((prev) => Math.min(prev + 3, reviews.length));
        }
    };

    return (
        <div className="space-y-4 py-10">
            <h1 className="text-2xl font-bold">{title}</h1>

            {isLoading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from([1, 2, 3]).map((review) => <ReviewCardSkeleton/>)}
                </div>
            )}

            {isError && <p className="text-red-500">Failed to load reviews. Please try again.</p>}

            {!isLoading && !isError && reviews.length > 0 && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <AnimatePresence initial={false}>
                            {reviews.slice(0, visibleCount).map((card: IReview) => (
                                <motion.div
                                    key={card.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ReviewCard {...card} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center pt-4">
                        {visibleCount < reviews.length ? (
                            <Button onClick={handleShowMore}>Show more</Button>
                        ) : (
                            <Button onClick={onViewAll}>View all</Button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}