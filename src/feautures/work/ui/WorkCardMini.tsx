import { Card, CardContent } from "@/shared/ui";
import { cn } from "@/lib/utils";

type WorkCardMini = {
    title: string;
    author: string;
    image: string;
    className?: string;
};

export default function WorkCardMini({ title, author, image, className }: WorkCardMini) {
    return (
        <Card className={cn("flex items-center w-full gap-4 p-3 hover:bg-accent transition", className)}>
            <img
                src={image}
                alt={title}
                className="w-max-[120] w-full h-16 object-cover rounded-md border shadow-sm"
            />
            <CardContent className="p-0">
                <div className="text-sm font-semibold line-clamp-1">Title: {title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">Author: {author}</div>
            </CardContent>
        </Card>
    );
}
