import { api } from "@/shared/api/axiosInstance";

export const putRating = async (userId: number, reviewId: number, value: number) => {
    console.log("📤 Запрос на установку рейтинга:", { userId, reviewId, value });

    try {
        const res = await api.post("/rating/rate-review", {
            userId,
            targetId: reviewId,
            targetType: "review",
            value,
        });

        console.log("✅ Сервер вернул:", res.data);
        return res.data;
    } catch (e) {
        console.error("❌ Ошибка в putRating:", e);
        throw e;
    }
};
