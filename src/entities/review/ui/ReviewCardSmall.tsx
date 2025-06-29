import Link from "next/link";
import {RatingStars} from "@/shared/ui";
import {formattedDate} from "@/shared/utils/dateFormater";

interface IReviewCardSmallProps {
    id: number;
    title: string;
    cover: string;
    content: string;
    averageRating: number;
    createdAt: string;
    updatedAt: string;
}

export default function ReviewCardSmall({ id, title, content, cover, createdAt, averageRating }: IReviewCardSmallProps) {
    const formatedCreatedAt: string = formattedDate(createdAt)

    console.log(cover)

    return (
        <Link href={`/reviews/${id}`}>
            <div className="flex mb-2 gap-6 max-w-[400px] h-[100px] p-2 rounded-lg border border-gray-300 bg-white dark:border-[#27272A] dark:bg-[#1E1E1E] hover:shadow-lg transition-shadow duration-200 space-y-2 overflow-hidden">
                <div className="flex relative max-w-[130px] w-full h-full bg-gray-200 dark:bg-[#27272A] rounded-lg overflow-hidden">
                    <img
                        src={cover}
                        alt={title}
                        className="object-cover w-full h-full rounded-lg"
                    />

                    <div className="absolute bottom-2 right-2 bg-white/80 dark:bg-black/60 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                        <span className="text-[7px] font-medium text-gray-900 dark:text-white">Avg Rate:</span>
                        <RatingStars count={averageRating} size="xs"/>
                    </div>
                </div>

                <div className="flex w-full flex-col justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xs font-semibold text-black dark:text-white truncate">{title}</h2>
                        <p className="text-[11px] text-gray-600 dark:text-[#A1A1AA] line-clamp-3">{content.slice(0, 40)}...</p>
                    </div>

                    <div className="flex w-full justify-between items-end">
                        <span className="text-[10px] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            {formatedCreatedAt}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
