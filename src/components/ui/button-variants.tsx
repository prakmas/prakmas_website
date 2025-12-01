import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary !text-white shadow hover:bg-primary/90 hover:scale-[1.02] hover:shadow-lg [&>*]:!text-white [&_svg]:!text-white",
        destructive: "bg-destructive text-white shadow-sm hover:bg-destructive/90 hover:scale-[1.02]",
        outline: "border-2 border-primary bg-background text-foreground shadow-sm hover:bg-primary/5 hover:scale-[1.02] hover:shadow-md hover:border-primary",
        secondary: "bg-secondary text-white shadow-sm hover:bg-secondary/90 hover:scale-[1.02] hover:shadow-lg",
        ghost: "text-foreground hover:bg-accent/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary !text-white shadow-lg hover:shadow-xl hover:scale-[1.03] font-bold [&>*]:!text-white [&_svg]:!text-white [&_span]:!text-white [&_a]:!text-white text-white",
        heroCyan: "bg-gradient-to-r from-gray-800 to-gray-900 !text-white shadow-lg hover:shadow-xl hover:scale-[1.03] font-bold [&>*]:!text-white [&_svg]:!text-white border-2 border-gray-700 hover:border-gray-600",
        glass: "bg-card/50 backdrop-blur-sm border border-border text-foreground hover:bg-card/80 hover:scale-[1.02] hover:shadow-md hover:border-primary/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
