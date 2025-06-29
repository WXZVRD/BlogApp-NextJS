'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
    Select,
    Input,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem
} from '@/shared/ui';

export const ReviewFilters = () => {
    const router = useRouter();
    const params = useSearchParams();

    const handleSortChange = (value: string) => {
        const search = new URLSearchParams(params);
        search.set('sort', value);
        router.push(`/reviews?${search.toString()}`);
    };

    return (
        <div className="flex items-center gap-4">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
