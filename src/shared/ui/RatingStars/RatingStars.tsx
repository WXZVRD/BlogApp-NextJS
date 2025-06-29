'use client'
import { useState } from "react";

interface RatingStarsProps {
    count: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | number;
    editable?: boolean;
    onChange?: (value: number) => void;
}

export default function RatingStars({
                                        count,
                                        size = 'md',
                                        editable = false,
                                        onChange,
                                    }: RatingStarsProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    let iconSizeClass = 'w-5 h-5';

    if (typeof size === 'number') {
        iconSizeClass = `w-[${size}px] h-[${size}px]`;
    } else {
        iconSizeClass = {
            xs: 'w-3 h-3',
            sm: 'w-4 h-4',
            md: 'w-5 h-5',
            lg: 'w-6 h-6',
        }[size];
    }

    const displayCount = hovered ?? count;

    return (
        <div className="flex items-center gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => {
                const filled = index < Math.round(displayCount);

                return (
                    <button
                        type="button"
                        key={index}
                        className="p-0 m-0 appearance-none bg-transparent border-none cursor-pointer"
                        onClick={() => {
                            if (editable) {
                                onChange?.(index + 1);
                            }
                        }}
                        onMouseEnter={() => editable && setHovered(index + 1)}
                        onMouseLeave={() => editable && setHovered(null)}
                    >
                        <svg
                            className={`${iconSizeClass} transition-colors ${
                                filled
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-600'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10 13.011l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.566 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
}
