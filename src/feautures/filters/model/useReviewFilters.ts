import { useSearchParams } from 'next/navigation';
import {ReviewFilterParams} from "@/feautures/filters/types";

export const useReviewFilters = (): ReviewFilterParams => {
    const params = useSearchParams();

    return {
        page: Number(params.get('page') || 1),
        take: Number(params.get('take') || 9),
    };
};
