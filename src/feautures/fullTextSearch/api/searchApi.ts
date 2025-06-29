import {api} from "@/shared/api/axiosInstance";


export async function searchApi(searchString: string) {
    const response = await api.get('/search', {
        params: {
            query: searchString
        }
    });

    return response.data;
}