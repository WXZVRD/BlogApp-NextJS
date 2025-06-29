import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Некорректный email"),
    password: z.string().min(6, "Минимум 6 символа").max(16),
});

export type LoginFormData = z.infer<typeof loginSchema>;
