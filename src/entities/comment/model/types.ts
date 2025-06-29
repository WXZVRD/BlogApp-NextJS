import {IUser} from "@/entities/user/types";

export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    author: IUser
}
