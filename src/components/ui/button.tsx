import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-open_sans font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        small:
          "text-sm bg-black text-white hover:bg-primary px-[15px] py-[5px] gap-1",
        line: "text-sm bg-transparent text-black border-b-2 border-b-black px-[15px] pb-[10px] hover:text-primary hover:border-b-primary gap-1",
        large:
          "text-md bg-black text-white hover:bg-primary px-[26px] py-[19px] gap-2",
        simple:
          "text-lg bg-transparent text-white hover:text-primary px-0 py-0 gap-2",
      },
    },
    defaultVariants: {
      variant: "small",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn("", buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
