import Link from "next/link";
import {IBlogCard} from "@/widgets/blog/types/BlogCard.interface";
import {Badge} from "@/shared/ui";

export default function BlogCard({ id, title, description, author, type }: IBlogCard) {
    return (
        <Link href={`/reviews/${id}`}>
            <div
                className="max-w-[350px] max-h-[340px] h-full p-4 rounded-lg border border-gray-300 bg-white dark:border-[#27272A] dark:bg-[#1E1E1E] hover:shadow-lg transition-shadow duration-200 space-y-2 overflow-hidden"
            >
                <div className="relative w-full h-[140px] bg-gray-200 dark:bg-[#27272A] rounded-lg">
                    <Badge
                        className="absolute bottom-2 left-2"
                        variant="outline"
                    >
                        {type}
                    </Badge>
                </div>

                <h2 className="text-xl font-semibold text-black dark:text-white truncate">{title}</h2>
                <p className="text-gray-600 dark:text-[#A1A1AA] text-sm line-clamp-3">{description}</p>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">by {author}</p>
            </div>
        </Link>
    );
}
