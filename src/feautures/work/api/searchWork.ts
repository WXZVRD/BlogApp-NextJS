import {api} from "@/shared/api/axiosInstance";


export default async function searchWork(type: any, query: any): Promise<any> {
    const response = await api.get('/work', {
        params: {
            type: type,
            query: query
        }
    })

    return response.data;
}