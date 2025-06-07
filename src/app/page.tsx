'use client'

import {Button} from "@/shared/ui/button";
import {useRoute} from "@/shared/hooks/useRoute";
import BlogSection from "@/widgets/blog/ui/BlogSection";
import {IBlogCard} from "@/widgets/blog/types/BlogCard.interface";

const mockBlogs: IBlogCard[] = [
    {
        id: 1,
        title: "Witcher 3: the wild hunt is the shit??",
        description: "Re-usable components built using\n" +
            "Radix UI and Tailwind CSS.",
        author: "WXZVRD",
        type: "GAME",
    },
    {
        id: 2,
        title: "Understanding JavaScript Closures",
        description: "Closures are a fundamental concept in JS — here’s why.",
        author: "Kyle Simpson",
        type: "JavaScript",
    },
    {
        id: 3,
        title: "How to write clean TypeScript",
        description: "Best practices for readable and maintainable code.",
        author: "Basarat Ali Syed",
        type: "TypeScript",
    },
    {
        id: 4,
        title: "Witcher 3: the wild hunt is the shit??",
        description: "Re-usable components built using\n" +
            "Radix UI and Tailwind CSS.",
        author: "WXZVRD",
        type: "GAME",
    },
    {
        id: 5,
        title: "Understanding JavaScript Closures",
        description: "Closures are a fundamental concept in JS — here’s why.",
        author: "Kyle Simpson",
        type: "JavaScript",
    },
    {
        id: 6,
        title: "How to write clean TypeScript",
        description: "Best practices for readable and maintainable code.",
        author: "Basarat Ali Syed",
        type: "TypeScript",
    },
    // Добавь ещё при необходимости
];

export default function Home() {
    const goTo = useRoute()

  return (
      <div>
        <h1>Main page!</h1>
          <BlogSection title="Most rated reviews" blogs={mockBlogs} onViewAll={() => goTo('/reviews')}/>
          <BlogSection title="Latest reviews" blogs={mockBlogs} onViewAll={() => goTo('/reviews')}/>
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
