import { Input } from "@/shared/ui";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchWork } from "@/feautures/work/model/useSearchWork";
import WorkCardMini from "@/feautures/work/ui/WorkCardMini";

type Props = {
    type: "book" | "film" | "game";
    onSelect: (work: any) => void;
};

export default function WorkSearchInput({ type, onSelect }: Props) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const debouncedQuery = useDebounce(inputValue, 500);
    const { data, isLoading, isFetching } = useSearchWork(type, debouncedQuery);

    const showList = isFocused && (data?.length > 0 || isLoading);

    useEffect(() => {
        if (inputValue) {
            console.log(`[WorkSearchInput] Typed: "${inputValue}"`);
        }
    }, [inputValue]);

    useEffect(() => {
        if (debouncedQuery) {
            console.log(`[WorkSearchInput] Debounced query: "${debouncedQuery}"`);
        }
    }, [debouncedQuery]);

    useEffect(() => {
        if (data && data.length) {
            console.log(`[WorkSearchInput] Found ${data.length} results:`, data);
        }
    }, [data]);

    return (
        <div className="relative w-64 max-w-xs space-y-2">
            <Input
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setTimeout(() => setIsFocused(false), 100);
                }}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Find a work"
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
                        {isLoading || isFetching ? (
                            <div className="flex gap-2 items-center text-gray-600 dark:text-gray-400">
                                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0s]" />
                                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                                <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce [animation-delay:0.3s]" />
                                <span className="text-sm ml-2">Поиск...</span>
                            </div>
                        ) : (
                            data.map((item: any) => (
                                <div key={item.id} onClick={() => onSelect(item)} className="cursor-pointer w-full">
                                    <WorkCardMini
                                        title={item.name}
                                        author={item.author || "unknown"}
                                        image={item.background_image}
                                    />
                                </div>
                            ))
                        )}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
