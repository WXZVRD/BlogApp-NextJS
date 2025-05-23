"use client";

import { Button } from "@/shared/ui/button";
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/shared/api/axios';

type Post = any;

export default function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axiosInstance.get<Post[]>('review/most-rated');
        console.log(response)
        setPosts(response.data);
      } catch (error) {
        console.error(error);
        setPosts([]);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>
      {Array.from({ length: 10 }, (_, i) => (
        <Button key={i} size="lg">Hello, button! {i + 1}</Button>
      ))}
      <div>
        {posts?.length
          ? posts.map((post, i) => <div key={i}>{JSON.stringify(post)}</div>)
          : 'ПОСТОВ НЕТУ'}
      </div>
    </div>
  );
}
