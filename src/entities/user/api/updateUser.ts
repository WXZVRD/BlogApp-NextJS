import { api } from "@/shared/api/axiosInstance";

export const updateUser = async (
    updateData: Partial<IUpdateUser>,
    userId: number
): Promise<IUpdateUser> => {
    try {
        const response = await api.put(`/users/${userId}`, updateData);
        return response.data;
    } catch (error) {
        throw error;
    }
};
