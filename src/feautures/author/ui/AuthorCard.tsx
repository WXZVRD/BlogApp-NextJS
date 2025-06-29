import {Avatar, AvatarFallback, AvatarImage, RatingStars} from "@/shared/ui";
import {IUser} from "@/entities/user/types";

interface Props {
    user: IUser
    ratingCount: number
}

export default function AuthorCard({ user, ratingCount}: Props) {
    return (
        <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatarUrl} alt={user.first_name}/>
                <AvatarFallback>{user.first_name[0]}{user.last_name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col leading-tight">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {user.first_name} {user.last_name}
                            </span>
                <RatingStars count={ratingCount}/>
            </div>
        </div>
    )
}