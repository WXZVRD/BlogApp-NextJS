import {useQuery} from "@tanstack/react-query";
import searchWork from "@/feautures/work/api/searchWork";


export const useSearchWork = (type: string, query: string) => {
    return useQuery({
        queryFn: () => searchWork(type, query),
        queryKey: ['work-search', type, query],
        enabled: !!query.trim(),
        staleTime: 60_000,
    });
}
