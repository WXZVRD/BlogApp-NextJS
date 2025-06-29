import {IUser} from "@/entities/user/types";
import {formattedDate} from "@/shared/utils/dateFormater";

type Props = {
    author: IUser;
    rating: number;
    createdAt: string;
};

export const ReviewMeta = ({ author, rating, createdAt }: Props) => (
    <div className="flex items-center gap-4 text-muted-foreground text-sm">
        <img src={author.avatarUrl} className="w-8 h-8 rounded-full" />
        <span>{author.first_name}</span>
        <span>•</span>
        <span>{formattedDate(createdAt)}</span>
        <span>•</span>
        <span>Rating: {rating}/5</span>
    </div>
);
