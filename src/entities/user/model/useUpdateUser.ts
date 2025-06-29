import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/shared/hooks/useAuth";
import {updateUser} from "@/entities/user/api/updateUser";

export const useUpdateUser = () => {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: ({ data, userId }: { data: Partial<IUpdateUser>; userId: number }) => {
            console.log("[UpdateUserMutation] Запуск запроса на обновление пользователя", {
                userId,
                data,
            });
            return updateUser(data, userId);
        },
        onSuccess: (updatedData) => {
            console.log("[UpdateUserMutation] Успешно обновлён пользователь:", updatedData);
            setUser((prev: any) => {
                const newState = prev ? { ...prev, ...updatedData } : prev;
                console.log("[UpdateUserMutation] Новое состояние пользователя:", newState);
                return newState;
            });
        },
        onError: (error) => {
            console.error("[UpdateUserMutation] Ошибка при обновлении пользователя", error);
        },
    });
};


