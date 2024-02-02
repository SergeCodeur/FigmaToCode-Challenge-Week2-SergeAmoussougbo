import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const itemMenuVariants = cva(
  "font-open_sans transition-colors hover:text-primary cursor-pointer",
  {
    variants: {
      variant: {
        small: "text-black text-[14px]",
        larg: "text-dark text-sm",
      },
    },
    defaultVariants: {
      variant: "small",
    },
  }
);

export interface ItemMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemMenuVariants> {}

function ItemMenu({ className, variant, ...props }: ItemMenuProps) {
  return (
    <span className={cn(itemMenuVariants({ variant }), className)} {...props} />
  );
}

export { ItemMenu, itemMenuVariants };
