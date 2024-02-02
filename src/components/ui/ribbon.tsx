import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const ribbonVariants = cva(
  "w-[52px] h-[24px] text-xs text-white font-semibold flex justify-center font-open_sans items-center uppercase",
  {
    variants: {
      variant: {
        hot: "bg-primary",
        sale: "bg-black",
      },
    },
    defaultVariants: {
      variant: "hot",
    },
  }
);

export interface RibbonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ribbonVariants> {
  tag?: "hot" | "sale";
}

function Ribbon({ className, variant, ...props }: RibbonProps) {
  return (
    <span className={cn(ribbonVariants({ variant }), className)} {...props} />
  );
}

export { Ribbon, ribbonVariants };
