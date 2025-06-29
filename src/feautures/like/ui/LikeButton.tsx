'use client';

import { useToggleLike } from "../model/useToggleLike";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type LikeButtonProps = {
    userId: number;
    reviewId: number;
    likes: { id: number; createdAt: string }[];
};

export const LikeButton = ({ userId, reviewId, likes }: LikeButtonProps) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(likes.length);

    const { mutate: toggleLike, isPending } = useToggleLike();

    useEffect(() => {
        const alreadyLiked = likes.some((like) => like.id === userId);
        setLiked(alreadyLiked);
    }, [likes, userId]);

    const handleClick = () => {
        toggleLike(
            { userId, reviewId },
            {
                onSuccess: () => {
                    setLiked((prev) => {
                        const next = !prev;
                        setLikesCount((count) => count + (next ? 1 : -1));
                        toast.success(next ? "Рецензия понравилась" : "Лайк удалён");
                        return next;
                    });
                },
                onError: () => {
                    toast.error("Не удалось отправить лайк");
                },
            }
        );
    };

    return (
        <button
            disabled={isPending}
            onClick={() => {
                if (!isPending) handleClick();
            }}
            className={cn(
                "flex items-center gap-1 text-sm transition-colors",
                liked ? "text-red-500" : "text-muted-foreground"
            )}
        >
            <Heart
                fill={liked ? "currentColor" : "none"}
                className="w-5 h-5 transition-all"
            />
            <span>{likesCount}</span>
        </button>
    );
};