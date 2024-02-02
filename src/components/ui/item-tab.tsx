import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const itemTabVariants = cva(
  "text-xl font-open_sans transition-colors hover:text-primary cursor-pointer",
  {
    variants: {
      variant: {
        active: "text-dark",
        inactive: "text-dark/50",
      },
    },
    defaultVariants: {
      variant: "active",
    },
  }
);

export interface ItemTabProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemTabVariants> {
  variants?: "active" | "inactive";
}

function ItemTab({ className, variant, ...props }: ItemTabProps) {
  return (
    <h6 className={cn(itemTabVariants({ variant }), className)} {...props} />
  );
}

export { ItemTab, itemTabVariants };
