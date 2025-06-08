'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function BlogList({ posts }: { posts: readonly any[] }) {
  return (
    <>
      {posts.map((post, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.href}>
        <motion.a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 mb-6 p-2 rounded-md cursor-pointer transition-colors hover:bg-muted/90"
            whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 },
            }}
        >
            {post.logoUrl && (
              <motion.div 
                suppressHydrationWarning
                className="w-20 h-20 relative shrink-0 overflow-hidden rounded-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={post.logoUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}
            <motion.div 
              suppressHydrationWarning
              className="flex flex-col"
              whileHover={{ x: 4 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <p className="tracking-tight font-semibold">{post.title}</p>
              <p className="text-sm text-muted-foreground">{post.description}</p>
            </motion.div>
          </motion.a>
        </BlurFade>
      ))}
    </>
  );
}
