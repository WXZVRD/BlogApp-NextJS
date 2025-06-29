import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui";
import { ReviewRowAction } from "@/entities/reviewRowAction/ui/ReviewRowAction";
import Image from "next/image";
import { IReview } from "@/entities/review/types";
import {formattedDate} from "@/shared/utils/dateFormater";

interface IReviewTable {
    reviews: Partial<IReview>[];
}

export function ReviewTable({ reviews }: IReviewTable) {
    return (
        <div className="border rounded-lg overflow-hidden max-h-[500px] overflow-y-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Cover</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="text-center">AVG Rating</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {reviews.map((review) => (
                        <TableRow key={review.id}>
                            <TableCell>
                                <div className="w-20 h-12 rounded-md overflow-hidden bg-muted">
                                    {review.cover && (
                                        <Image
                                            src={review.cover}
                                            alt={review.title || "Cover"}
                                            width={80}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>{review.title}</TableCell>
                            <TableCell className="text-center">{review.averageRating}</TableCell>
                            <TableCell>
                                {review.createdAt && formattedDate(review.createdAt)}
                            </TableCell>
                            <TableCell>
                                {review.id && <ReviewRowAction reviewId={review.id} />}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
    );
}