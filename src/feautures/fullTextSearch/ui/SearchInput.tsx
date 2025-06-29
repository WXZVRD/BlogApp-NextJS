import { Input } from "@/shared/ui";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useState } from "react";
import { useFulltextSearch } from "@/feautures/fullTextSearch/model/useFulltextSearch";
import ReviewCardSmall from "@/entities/review/ui/ReviewCardSmall";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchInput() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const debouncedQuery = useDebounce(inputValue, 500);
    const { data, isLoading } = useFulltextSearch(debouncedQuery);

    const showList = isFocused && (data?.length > 0 || isLoading);

    return (
        <div className="relative w-64 max-w-xs space-y-2">
            <Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Full text search..."
            />

            <AnimatePresence>
                {showList && (
                    <motion.ul
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute z-50 left-[-50%] bg-white dark:bg-[#1E1E1E] rounded-lg shadow-lg p-4 w-[400px] space-y-2 min-h-[80px] flex flex-col items-center justify-center"
                    >
                        {isLoading ? (
                            <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0s]" />
                                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.3s]" />
                                <span className="text-sm ml-2">Searching...</span>
                            </div>
                        ) : (
                            data.map((item: any) => (
                                <ReviewCardSmall key={item.id} {...item} />
                            ))
                        )}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}