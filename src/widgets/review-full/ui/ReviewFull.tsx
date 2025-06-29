'use client'

import { useReviewById } from "../model/useReviewById";
import MDEditor from "@uiw/react-md-editor";
import AuthorCard from "@/feautures/author/ui/AuthorCard";
import { AspectRatio, RatingStars, Separator } from "@/shared/ui";
import { ReviewMeta } from "@/entities/review/ui/ReviewMeta";
import { useAuth } from "@/shared/hooks/useAuth";
import { useState } from "react";
import { usePutReviewRating } from "@/feautures/rating/model/usePutReviewRating";
import { toast } from "sonner";
import {LikeButton} from "@/feautures/like/ui/LikeButton";
import {CommentsBlock} from "@/widgets/comment-block/CommentBlock";
import BlogSection from "@/widgets/blog/ui/BlogSection";
import {useRoute} from "@/shared/hooks/useRoute";

type Props = { id: number };

export const ReviewFull = ({ id }: Props) => {
    const [rating, setRating] = useState(0);
    const { user } = useAuth();
    const { data, isLoading, error } = useReviewById(id);
    const goTo = useRoute()

    const { mutate: rateReview, isPending } = usePutReviewRating();

    if (isLoading) return <div>Loading...</div>;

    if (error || !data) {
        console.error("❌ Ошибка загрузки или данных нет:", error);
        return <div>Review not found</div>;
    }

    const handlePutRating = (value: number) => {
        if (!user) {
            console.warn("⚠️ Пользователь не авторизован — рейтинг не отправлен");
            return;
        }

        console.log("📥 Установка рейтинга", value);

        rateReview(
            {
                userId: user.id,
                reviewId: id,
                value,
            },
            {
                onSuccess: () => {
                    toast.success("Рейтинг успешно установлен");
                    console.log("✅ Успешно отправлен рейтинг");
                },
                onError: (err) => {
                    toast.error("Ошибка при отправке рейтинга");
                    console.error("❌ Ошибка при отправке рейтинга:", err);
                },
            }
        );
    };

    return (
        <div className="flex">
           <div className="space-y-6 max-w-3xl mx-auto my-10">
               <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
                   <img
                       src={data.cover}
                       alt="Cover"
                       className="w-full h-full object-cover"
                   />
               </AspectRatio>

               <ReviewMeta
                   author={data.user}
                   rating={data.averageRating}
                   createdAt={data.createdAt}
               />

               <h1 className="text-3xl font-bold">{data.title}</h1>
               <Separator className="w-full" />

               <div data-color-mode="dark">
                   <MDEditor.Markdown
                       style={{ whiteSpace: "pre-wrap", background: "none" }}
                       source={data.content}
                   />
               </div>

               <Separator className="w-full" />

               <div className="flex gap-20 items-center">
                   {user && <AuthorCard user={user} ratingCount={3}/>}

                   <div>
                       <p className="mb-1">Оцените рецензию:</p>
                       {user && (
                           <LikeButton
                               userId={user.id}
                               reviewId={data.id}
                               likes={data.likes}
                           />
                       )}
                   </div>


                   <div>
                       <p className="mb-1">Оцените рецензию:</p>
                       <RatingStars
                           count={rating}
                           editable
                           onChange={(val) => {
                               setRating(val);
                               handlePutRating(val);
                           }}
                       />
                   </div>
               </div>

               <CommentsBlock reviewId={data.id}/>
           </div>
            <div>
                <BlogSection
                    title="Similar review's"
                    onViewAll={() => goTo("/reviews")}
                    fetchUrl="/review/most-rated"
                    layoutType="column"
                />
            </div>
        </div>
    );
};
