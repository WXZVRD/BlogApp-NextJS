export interface IUser {
    id: number;
    email: string,
    first_name: string;
    last_name: string;
    role: string,
    provider: "local" | "github"
    avatarUrl: string;
}