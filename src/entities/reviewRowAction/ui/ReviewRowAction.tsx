import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button
} from "@/shared/ui";

import { Pencil, Trash2 } from "lucide-react";
import { useDeleteReview } from "@/entities/review/model/useDeleteReview";
import Link from "next/link";

export function ReviewRowAction({ reviewId }: { reviewId: number }) {
    const { mutate: deleteReviewMutate, isPending } = useDeleteReview();

    return (
        <div className="flex gap-2">
            <Link href={`reviews/${reviewId}/edit`} passHref>
                <Button size="icon" variant="ghost">
                    <Pencil className="w-4 h-4" />
                </Button>
            </Link>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Удалить рецензию?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Это действие нельзя отменить. После удаления рецензия будет безвозвратно удалена.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Отмена</AlertDialogCancel>
                        <AlertDialogAction
                            disabled={isPending}
                            onClick={() => deleteReviewMutate(reviewId)}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Удалить
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
