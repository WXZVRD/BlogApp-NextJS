import { useMutation } from "@tanstack/react-query";
import { createReview } from "../api/createReview";

export const useCreateReview = () => {
    return useMutation({
        mutationFn: createReview,

        onMutate: async (variables) => {
            console.log("🔄 Мутация началась. Данные:", variables);
        },

        onSuccess: (data, variables) => {
            console.log("✅ Мутация успешна. Ответ:", data);
            console.log("📤 Отправленные данные:", variables);
        },

        onError: (error, variables) => {
            console.error("❌ Ошибка при мутации:", error);
            console.log("📤 Данные вызвавшие ошибку:", variables);
        },

        onSettled: (data, error, variables) => {
            console.log("📍 Мутация завершена. Ответ:", data);
            if (error) {
                console.error("🛑 Ошибка:", error);
            }
        },
    });
};
