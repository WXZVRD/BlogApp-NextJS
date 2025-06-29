import { api } from "@/shared/api/axiosInstance";

type ToggleLikeParams = {
    userId: number;
    reviewId: number;
};

export const toggleLike = async ({ userId, reviewId }: ToggleLikeParams): Promise<void> => {
    try {
        console.log("📤 Отправка лайка:", { userId, reviewId });

        await api.post("/review/toggle-like", {
            userId,
            reviewId,
        });

        console.log("✅ Лайк успешно отправлен");
    } catch (error) {
        console.error("❌ Ошибка при отправке лайка:", error);
        throw error;
    }
};
