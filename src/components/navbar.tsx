"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react"; // make sure this is at the top
// export default function Navbar() {

//   return (
//     <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14" suppressHydrationWarning>
//       <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" suppressHydrationWarning ></div>
//       <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
//         {DATA.navbar.map((item) => (
//           <DockIcon key={item.href}>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Link
//                   href={item.href}
//                   className={cn(
//                     buttonVariants({ variant: "ghost", size: "icon" }),
//                     "size-12"
//                   )}
//                 >
//                   <item.icon className="size-4" />
//                 </Link>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>{item.label}</p>
//               </TooltipContent>
//             </Tooltip>
//           </DockIcon>
//         ))}
//         <Separator orientation="vertical" className="h-full" />
//         {Object.entries(DATA.contact.social)
//           .filter(([_, social]) => social.navbar)
//           .map(([name, social]) => (
//             <DockIcon key={name}>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Link
//                     href={social.url}
//                     className={cn(
//                       buttonVariants({ variant: "ghost", size: "icon" }),
//                       "size-12"
//                     )}
//                   >
//                     <social.icon className="size-4" />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>{name}</p>
//                 </TooltipContent>
//               </Tooltip>
//             </DockIcon>
//           ))}
//         <Separator orientation="vertical" className="h-full py-2" />
//         <DockIcon>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <ModeToggle />
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Theme</p>
//             </TooltipContent>
//           </Tooltip>
//         </DockIcon>
//       </Dock>
//     </div>
//   );
// }


export default function Navbar() {
  const [copied, setCopied] = useState(false); // at the top level 

  const handleEmailClick = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 6000); // reset after 2 seconds
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14" suppressHydrationWarning>
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" suppressHydrationWarning></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background ...">
        
        {/* Main Navbar Items */}
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full" />

        {/* Socials */}
        {Object.entries(DATA.contact.social)
          .filter(([name, social]) => social.navbar && name !== "email")
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

        {/* Email Button with "Copied!" Tooltip */}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleEmailClick}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12"
                )}
              >
                <DATA.contact.social.email.icon className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Email copied!" : DATA.contact.social.email.name}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full py-2" />

        {/* Theme Toggle */}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
