import Link from "next/link";
import {IBlogCard} from "@/widgets/blog/types/BlogCard.interface";

export default function BlogCard({ id, title, description, author, type }: IBlogCard) {
    return (
        <Link href={`/reviews/${id}`}>
            <div
                className="max-w-[350px] max-h-[340px] h-full p-4 rounded-lg border border-[#27272A] bg-[#1E1E1E] hover:shadow-lg transition-shadow duration-200 space-y-2 overflow-hidden">

                <div className="relative w-full h-[140px] bg-[#27272A] rounded-lg">
                    <div
                        className="absolute bottom-2 left-2 text-xs px-2 py-1 bg-black/60 text-gray-300 uppercase rounded">
                        {type}
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-white truncate">{title}</h2>
                <p className="text-[#A1A1AA] text-sm line-clamp-3">{description}</p>
                <div className="text-xs text-gray-500 mt-2">by {author}</div>
            </div>
        </Link>
    );
}
