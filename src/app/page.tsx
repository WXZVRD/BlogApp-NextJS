'use client'

import {useRoute} from "@/shared/hooks/useRoute";
import BlogSection from "@/widgets/blog/ui/BlogSection";

export default function Home() {
    const goTo = useRoute()

  return (
      <div>
          <BlogSection fetchUrl="/review/most-rated" title="Most rated reviews" onViewAll={() => goTo('/reviews')}/>
          <BlogSection fetchUrl="/review/latest" title="Latest reviews" onViewAll={() => goTo('/reviews')}/>
      </div>
  );
}
