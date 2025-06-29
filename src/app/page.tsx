'use client'

import {Button} from "@/shared/ui/Button/button";
import {useRoute} from "@/shared/hooks/useRoute";
import BlogSection from "@/widgets/blog/ui/BlogSection";

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
