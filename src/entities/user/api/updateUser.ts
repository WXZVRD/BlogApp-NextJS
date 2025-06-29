import { api } from "@/shared/api/axiosInstance";

export const updateUser = async (
    updateData: Partial<IUpdateUser>,
    userId: number
): Promise<IUpdateUser> => {
    console.log("[API] PUT /users/:id", {
        userId,
        updateData,
    });

    try {
        const response = await api.put(`/users/${userId}`, updateData);
        console.log("[API] Успешный ответ от сервера:", response.data);
        return response.data;
    } catch (error) {
        console.error("[API] Ошибка при запросе PUT /users/:id", error);
        throw error;
    }
};
