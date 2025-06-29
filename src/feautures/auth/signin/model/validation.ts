import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email("Некорректный email"),
    password: z.string().min(6, "Минимум 6 символа").max(16),
    firstName: z.string().min(4).max(10),
    lastName: z.string().min(4).max(10),
});

export type SigninFormData = z.infer<typeof signinSchema>;
