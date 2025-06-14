import { useState } from "react";
import { Button } from "@/shared/ui/index";
import BlogCard from "@/widgets/blog/ui/BlogCard";
import { IBlogCard } from "@/widgets/blog/types/BlogCard.interface";
import { motion, AnimatePresence } from "framer-motion";

interface IBlogSection {
    title: string;
    onViewAll: () => void;
    blogs: IBlogCard[];
}

export default function BlogSection({ title, onViewAll, blogs }: IBlogSection) {
    const [visibleCount, setVisibleCount] = useState<number>(3);

    const handleShowMore = (): void => {
        if (visibleCount >= 6) {
            onViewAll();
        } else {
            setVisibleCount((prev) => Math.min(prev + 3, blogs.length));
        }
    };

    return (
        <div className="space-y-4 py-10">
            <h1 className="text-2xl font-bold">{title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence initial={false}>
                    {blogs.slice(0, visibleCount).map((card) => (
                        <motion.div
                            key={card.id}
                            layout
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            transition={{duration: 0.3}}
                        >
                            <BlogCard {...card} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {visibleCount < blogs.length ? (
                <Button onClick={handleShowMore}>Show more</Button>
            ) : (
                <Button onClick={onViewAll}>View All</Button>
            )}
        </div>
    );
}