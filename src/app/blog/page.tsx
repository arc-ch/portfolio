// import Image from "next/image";
// import BlurFade from "@/components/magicui/blur-fade";
// import { DATA } from "@/data/resume";

// export const metadata = {
//   title: "Blog",
//   description:
//     "Insights on technology, climate, digital privacy, and ethical filmmaking—exploring today’s innovations and future challenges.",
// };

// const BLUR_FADE_DELAY = 0.04;

// export default function BlogPage() {
//   const posts = DATA.blogPosts ?? [];

//   return (
//     <section>
//       <BlurFade delay={BLUR_FADE_DELAY}>
//         <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Blogs</h1>
//       </BlurFade>

//       {posts.map((post, id) => (
//         <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.href}>
//           <a
//             className="flex items-start gap-4 mb-6 cursor-pointer hover:underline"
//             href={post.href}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {post.logoUrl && (
//               <div className="w-20 h-20 relative shrink-0" suppressHydrationWarning>
//                 <Image
//                   src={post.logoUrl}
//                   alt={post.title}
//                   fill
//                   className="rounded-md object-cover"
//                 />
//               </div>
//             )}
//             <div className="flex flex-col" suppressHydrationWarning>
//               <p className="tracking-tight font-semibold">{post.title}</p>
//               <p className="text-sm text-muted-foreground">{post.description}</p>
//             </div>
//           </a>
//         </BlurFade>
//       ))}
//     </section>
//   );
// }

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import BlogList from "@/components/blog-list"; // Your new component

export const metadata = {
  title: "Blog",
  description:
    "Insights on technology, climate, digital privacy, and ethical filmmaking—exploring today’s innovations and future challenges.",
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Blogs</h1>
      </BlurFade>
      <BlogList posts={DATA.blogPosts ?? []} />
    </section>
  );
}
