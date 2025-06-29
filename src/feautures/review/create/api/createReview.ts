import {api} from "@/shared/api/axiosInstance";
import {IReview} from "@/entities/review/types";

export const createReview = async (data: {
    title: string;
    content: string;
    cover: string;
    authorId: number,
    workData: any;
}): Promise<IReview> => {
    console.log("📡 Отправка запроса на /review-full/create:", data);

    try {
        const response = await api.post("/review/create", data);
        console.log("📥 Ответ от сервера:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Ошибка запроса /review-full/create:", error);
        throw error;
    }
};
