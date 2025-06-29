import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/shared/hooks/useAuth";
import {updateUser} from "@/entities/user/api/updateUser";

export const useUpdateUser = () => {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: ({ data, userId }: { data: Partial<IUpdateUser>; userId: number }) => {
            return updateUser(data, userId);
        },
        onSuccess: (updatedData) => {
            setUser((prev: any) => {
                const newState = prev ? { ...prev, ...updatedData } : prev;
                return newState;
            });
        }});
};


