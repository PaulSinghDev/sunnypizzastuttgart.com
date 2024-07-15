import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const anchorLinkVariants = cva(
  "inline font-medium hover:underline decoration-2 underline-offset-2",
  {
    variants: {
      variant: {
        default: "",
        button:
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-50 transition-all hover:no-underline shadow-md",
      },
      size: {
        default: "",
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface AnchorLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof anchorLinkVariants> {
  asChild?: boolean;
  href: string;
  title: string;
}

const AnchorLink = React.forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        className={cn(anchorLinkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
AnchorLink.displayName = "AnchorLink";

export { AnchorLink, anchorLinkVariants };
