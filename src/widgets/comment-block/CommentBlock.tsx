"use client";

import { CommentCard } from "@/entities/comment/ui/CommentCard";
import { AddCommentForm } from "@/feautures/comment/add/ui/AddCommentForm";
import { useGetCommentsByReview } from "@/feautures/comment/getByReview/model/useGetByReview";
import { useState, useEffect, useCallback } from "react";
import { useCommentSocket } from "@/entities/comment/model/useCommentSocket";
import { Comment } from "@/entities/comment/model/types";

type Props = {
    reviewId: number;
};

export const CommentsBlock = ({ reviewId }: Props) => {
    const { data: fetchedComments, isLoading } = useGetCommentsByReview(reviewId);
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        if (fetchedComments) {
            setComments(fetchedComments);
        }
    }, [fetchedComments]);

    const addComment = useCallback((newComment: Comment) => {
        setComments((prev) => {
            const exists = prev.some((c) => c.id === newComment.id);
            return exists ? prev : [...prev, newComment];
        });
    }, []);

    useCommentSocket(reviewId, addComment);

    if (isLoading) return <div>Loading comments...</div>;

    return (
        <div className="space-y-4 mt-6">
            <AddCommentForm reviewId={reviewId} onSuccess={addComment} />
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))
            ) : (
                <p className="text-sm text-muted-foreground">No comments yet</p>
            )}
        </div>
    );
};