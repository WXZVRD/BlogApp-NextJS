"use client";
import { useState } from "react";
import { Button, Input } from "@/shared/ui";
import { useAuth } from "@/shared/hooks/useAuth";
import { useAddComment } from "@/feautures/comment/add/useAddComment";
import {Comment} from "@/entities/comment/model/types";

interface Props {
    reviewId: number;
    onSuccess: (newComment: Comment) => void;
}

export const AddCommentForm = ({ reviewId, onSuccess }: Props) => {
    const { user } = useAuth();
    const [text, setText] = useState("");
    const { mutate, isPending } = useAddComment();

    const handleSubmit = () => {
        if (!text.trim() || !user) return;

        mutate(
            { reviewId, authorId: user.id, content: text },
            {
                onSuccess: (newComment) => {
                    setText("");
                    onSuccess(newComment);
                },
                onError: () => {
                    console.error("❌ Не удалось отправить комментарий");
                },
            }
        );
    };

    return (
        <div className="flex gap-2">
            <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write a comment..."
            />
            <Button disabled={isPending || !text.trim()} onClick={handleSubmit}>
                Send
            </Button>
        </div>
    );
};
