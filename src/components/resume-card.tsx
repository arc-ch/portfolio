"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | readonly string[]; 
}

// export const ResumeCard = ({
//   logoUrl,
//   altText,
//   title,
//   subtitle,
//   href,
//   badges,
//   period,
//   description,
// }: ResumeCardProps) => {
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     if (description) {
//       e.preventDefault();
//       setIsExpanded(!isExpanded);
//     }
//   };

//   return (
//     <Link
//       href={href || "#"}
//       className="block cursor-pointer"
//       onClick={handleClick}
//     >
//       <Card className="flex">
//         <div className="flex-none">
//           <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
//             <AvatarImage
//               src={logoUrl}
//               alt={altText}
//               className="object-contain"
//             />
//             <AvatarFallback>{altText[0]}</AvatarFallback>
//           </Avatar>
//         </div>
//         <div className="flex-grow ml-4 items-center flex-col group">
//           <CardHeader>
//             <div className="flex items-center justify-between gap-x-2 text-base">
//               <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
//                 {title}
//                 {badges && (
//                   <span className="inline-flex gap-x-1">
//                     {badges.map((badge, index) => (
//                       <Badge
//                         variant="secondary"
//                         className="align-middle text-xs"
//                         key={index}
//                       >
//                         {badge}
//                       </Badge>
//                     ))}
//                   </span>
//                 )}
//                 <ChevronRightIcon
//                   className={cn(
//                     "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
//                     isExpanded ? "rotate-90" : "rotate-0"
//                   )}
//                 />
//               </h3>
//               <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
//                 {period}
//               </div>
//             </div>
//             {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
//           </CardHeader>
//           {description && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{
//                 opacity: isExpanded ? 1 : 0,

//                 height: isExpanded ? "auto" : 0,
//               }}
//               transition={{
//                 duration: 0.7,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="mt-2 text-xs sm:text-sm"
//             >
//               {description}
//             </motion.div>
//           )}
//         </div>
//       </Card>
//     </Link>
//   );
// };






export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only run on client after mount to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (description) {
      e.preventDefault();
      e.stopPropagation();
      setIsExpanded(!isExpanded);
    }
  };

  // Check if description contains links (which would create nested <a> tags)
  const hasNestedLinks = Array.isArray(description) 
    ? description.some(desc => desc.includes(" Blog"))
    : typeof description === 'string' && description.includes(" Blog");

  const CardContent = () => (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1 mb-0.5 ml-2">
                  {badges.map((badge, index) => (
                    <Badge variant="secondary" className="align-middle text-[10px] px-2 py-0.2 hover:bg-gray-900" key={index}>
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              <ChevronRightIcon
                className={cn(
                  "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <div className="mt-2 text-xs sm:text-sm">
            {/* Always render the container, but control visibility */}
            <div
              className={cn(
                "transition-all duration-700 ease-out overflow-hidden",
                isExpanded ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
              )}
            >
              {mounted && (
                <>
                  {Array.isArray(description) ? (
                    description.map((desc, i) => {
                      if (desc.includes(" Blog")) {
                        const parts = desc.split(" Blog");
                        return (
                          <p key={i} className="mb-1">
                            {parts[0]}{" "}
                            <a
                              href="https://architchoudhury10.medium.com/we-made-a-board-game-that-teaches-about-climate-change-b00f533e0b90"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Learn more in my blog
                            </a>
                            {parts[1] && ` ${parts[1]}`}
                          </p>
                        );
                      }
                      return <p key={i} className="mb-1">{desc}</p>;
                    })
                  ) : (
                    <p>{description}</p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div suppressHydrationWarning className="block cursor-pointer">
        <Card className="flex">
          <div  suppressHydrationWarning className="flex-none">
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div suppressHydrationWarning className="flex-grow ml-4 items-center flex-col group">
            <CardHeader>
              <div  suppressHydrationWarning className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  {title}
                  {badges && (
                    <span className="inline-flex gap-x-1 mb-0.5 ml-2">
                      {badges.map((badge, index) => (
                        <Badge variant="secondary" className="align-middle text-[10px] px-2 py-0.2 hover:bg-gray-900" key={index}>
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                  <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                </h3>
                <div suppressHydrationWarning className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div suppressHydrationWarning className="font-sans text-xs">{subtitle}</div>}
            </CardHeader>
            {description && (
              <div suppressHydrationWarning className="mt-2 text-xs sm:text-sm opacity-0 max-h-0 overflow-hidden">
                {/* Placeholder content that matches server render */}
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }

  // If there are nested links or no href, render without Link wrapper
  if (hasNestedLinks || !href) {
    return (
      <div suppressHydrationWarning className="block cursor-pointer" onClick={handleClick}>
        <CardContent />
      </div>
    );
  }

  // If there's an href and no nested links, use Link wrapper
  return (
    <Link href={href} className="block cursor-pointer" onClick={handleClick}>
      <CardContent />
    </Link>
  );
};