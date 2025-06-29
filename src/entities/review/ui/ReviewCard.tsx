import Link from "next/link";
import {IReview} from "@/entities/review/types";
import {RatingStars} from "@/shared/ui";
import {formattedDate} from "@/shared/utils/dateFormater";

interface IReviewCard extends IReview {}

export default function ReviewCard({ id, title, content, cover, createdAt, updatedAt, ratingCount, averageRating, user }: IReviewCard) {

    const formatedCreatedAt: string = formattedDate(createdAt)

    return (
        <Link href={`/reviews/${id}`}>
            <div
                className="max-w-[350px] max-h-[360px] h-full p-4 rounded-lg border border-gray-300 bg-white dark:border-[#27272A] dark:bg-[#1E1E1E] hover:shadow-lg transition-shadow duration-200 space-y-2 overflow-hidden"
            >

                <div className="relative w-full h-[140px] bg-gray-200 dark:bg-[#27272A] rounded-lg overflow-hidden">
                    <img
                        src={cover}
                        alt={title}
                        className="object-cover w-full h-full rounded-lg"
                    />

                    <div
                        className="absolute bottom-2 right-2 bg-white/80 dark:bg-black/60 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                        <span className="text-xs font-medium text-gray-900 dark:text-white">Avg Rate:</span>
                        <RatingStars count={averageRating}/>
                    </div>
                </div>


                <h2 className="text-xl font-semibold text-black dark:text-white truncate">{title}</h2>
                <p className="text-gray-600 dark:text-[#A1A1AA] text-sm line-clamp-3">{content.slice(0, 100)}...</p>

                <div className="flex justify-between items-end">

                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {formatedCreatedAt}
                    </span>
                </div>
            </div>
        </Link>
    );
}
