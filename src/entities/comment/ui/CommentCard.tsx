import { Comment } from "../model/types";
import {formattedDate} from "@/shared/utils/dateFormater";
import AuthorCard from "@/feautures/author/ui/AuthorCard";

export const CommentCard = ({ comment }: { comment: Comment }) => {
    return (
        <div className="border rounded p-3 space-y-5">
            <div className="flex items-center gap-2">
                <AuthorCard user={comment.author} ratingCount={3}/>
                <span className="text-sm text-muted-foreground ml-auto">
                {formattedDate(comment.createdAt)}
                </span>
            </div>
            <p>{comment.content}</p>
        </div>
    );
};
