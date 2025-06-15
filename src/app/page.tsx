'use client'

import {Button} from "@/shared/ui/Button/button";
import {useRoute} from "@/shared/hooks/useRoute";
import BlogSection from "@/widgets/blog/ui/BlogSection";
import {IReview} from "@/entities/review/types";

const mockReviews: IReview[] = [
    {
        id: 1,
        title: "Witcher 3: the wild hunt is the shit??",
        description: "Re-usable components built using\n" +
            "Radix UI and Tailwind CSS.",
        author: "WXZVRD",
        type: "GAME",
        created_at: "2025-06-15T10:21:00.000Z"
    },
    {
        id: 2,
        title: "Understanding JavaScript Closures",
        description: "Closures are a fundamental concept in JS — here’s why.",
        author: "Kyle Simpson",
        type: "JavaScript",
        created_at: "2025-06-15T10:21:00.000Z"
    },
    {
        id: 3,
        title: "How to write clean TypeScript",
        description: "Best practices for readable and maintainable code.",
        author: "Basarat Ali Syed",
        type: "TypeScript",
        created_at: "2025-06-15T10:21:00.000Z"
    },
    {
        id: 4,
        title: "Witcher 3: the wild hunt is the shit??",
        description: "Re-usable components built using\n" +
            "Radix UI and Tailwind CSS.",
        author: "WXZVRD",
        type: "GAME",
        created_at: "2025-06-15T10:21:00.000Z"
    },
    {
        id: 5,
        title: "Understanding JavaScript Closures",
        description: "Closures are a fundamental concept in JS — here’s why.",
        author: "Kyle Simpson",
        type: "JavaScript",
        created_at: "2025-06-15T10:21:00.000Z"
    },
    {
        id: 6,
        title: "How to write clean TypeScript",
        description: "Best practices for readable and maintainable code.",
        author: "Basarat Ali Syed",
        type: "TypeScript",
        created_at: "2025-06-15T10:21:00.000Z"
    },
];

export default function Home() {
    const goTo = useRoute()

  return (
      <div>
          <BlogSection fetchUrl="/review/most-rated" title="Most rated reviews" onViewAll={() => goTo('/reviews')}/>
          <BlogSection fetchUrl="/review/latest" title="Latest reviews" onViewAll={() => goTo('/reviews')}/>
          <Button onClick={() => goTo('/')}>Go main page</Button>
          <Button onClick={() => goTo('/reviews')}>Go reviews</Button>
          <Button onClick={() => goTo('/reviews/1')}>Go review id [1]</Button>
          <Button onClick={() => goTo('/reviews/1/edit')}>Go edit review</Button>
          <Button onClick={() => goTo('/reviews/create')}>Go create review</Button>
          <Button onClick={() => goTo('/profile')}>Go profile</Button>
          <Button onClick={() => goTo('/profile/edit')}>Go profile edit</Button>
          <Button onClick={() => goTo('/auth/login')}>Go Log in</Button>
          <Button onClick={() => goTo('/auth/sign-in')}>Go Sign In</Button>
          <Button onClick={() => goTo('/admin')}>Go admin</Button>
      </div>
  );
}
