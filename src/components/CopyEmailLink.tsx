import { useState } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { toast } from "react-hot-toast"; // optional if you want toast
import { cn } from "@/lib/utils";

const email = "architchoudhury10@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast.success("Email copied to clipboard!"); // optional toast
      setTimeout(() => setCopied(false), 2000); // reset tooltip text after 2 seconds
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleCopy}
          className={cn(
            "text-blue-500 hover:underline cursor-pointer bg-transparent border-none p-0"
          )}
          suppressHydrationWarning
        >
          with a direct question on GMAIL
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p suppressHydrationWarning>{copied ? "Copied!" : "Click to copy email"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
