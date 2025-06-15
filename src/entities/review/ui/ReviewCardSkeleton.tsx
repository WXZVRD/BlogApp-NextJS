import { Skeleton } from "@/shared/ui";

export default function ReviewCardSkeleton() {
    return (
        <div className="max-w-[360px] h-full max-h-[600px] min-h-[300px] p-4 rounded-lg border border-gray-300 bg-white dark:border-[#27272A] dark:bg-[#1E1E1E] hover:shadow-lg transition-shadow duration-200 space-y-4 overflow-hidden">
            <Skeleton className="w-full h-[140px] bg-gray-200 dark:bg-[#27272A] rounded-lg " />
            <Skeleton className="w-3/4 h-5 rounded bg-gray-200 dark:bg-[#3A3A3A] " />
            <Skeleton className="w-full h-4 rounded bg-gray-200 dark:bg-[#3A3A3A] " />
            <Skeleton className="w-5/6 h-4 rounded bg-gray-200 dark:bg-[#3A3A3A] " />
        </div>
    );
}
