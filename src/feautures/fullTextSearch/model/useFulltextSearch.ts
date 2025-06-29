import {searchApi} from "@/feautures/fullTextSearch/api/searchApi";
import {useQuery} from "@tanstack/react-query";

export const useFulltextSearch = (text: string) => {
    return useQuery({
        queryFn: () => searchApi(text),
        queryKey: ['fulltextSearch', text],
        enabled: !!text.trim(),
        staleTime: 60_000,
    });
}