'use client'

import ProfileUserMenu from "@/widgets/profile/ProfileUserMenu";
import { ReviewTable } from "@/entities/review/ui/ReviewTable";
import { useAuth } from "@/shared/hooks/useAuth";
import { useProfileReview } from "@/entities/review/model/useProfileReview";

export default function Profile() {
    const { user } = useAuth();

    const { data: reviews = [], isLoading, isError } = useProfileReview(user?.id);

    return (
        <div className="p-6 space-y-6">
            <ProfileUserMenu />

            {isLoading && <p>Загрузка отзывов...</p>}
            {isError && <p className="text-red-500">Ошибка загрузки отзывов.</p>}

            <ReviewTable reviews={reviews} />
        </div>
    );
}
