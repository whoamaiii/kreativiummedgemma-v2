import * as React from "react";
import { ScrollArea as RadixScrollArea, ScrollAreaViewport, ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof RadixScrollArea> {
  className?: string;
  children?: React.ReactNode;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ className, children, ...props }) => {
  return (
    <RadixScrollArea className={cn("w-full h-full", className)} {...props}>
      <ScrollAreaViewport className="w-full h-full">
        {children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical" />
      <ScrollAreaScrollbar orientation="horizontal" />
    </RadixScrollArea>
  );
};

