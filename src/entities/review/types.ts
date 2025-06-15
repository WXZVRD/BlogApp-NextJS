import {IUser} from "@/entities/user/types";

export interface IReview  {
    id: number;
    title: string;
    cover: string;
    user: IUser;
    content: string;
    averageRating: number;
    ratingCount: number;
    createdAt: string;
    updatedAt: string;
}