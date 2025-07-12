'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { scrollToId, triggerContact } from "@/lib/actions"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center font-main justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-gray-900 hover:bg-cyan-900",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary text-black font-main underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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

  /** If set, button will smooth-scroll to this element id */
  scrollTarget?: string
  /** If set, button will open mail or tel automatically  */
  contact?: { mode: 'email' | 'phone'; value: string }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      scrollTarget,
      contact,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // respect disabled + user-supplied onClick
      if (props.disabled) e.preventDefault()
      props.onClick?.(e)

      if (scrollTarget) scrollToId(scrollTarget)
      if (contact) triggerContact(contact.mode, contact.value)
    }

    return (
      <Comp
        {...props}
        ref={ref}
        onClick={handleClick}
        className={cn(buttonVariants({ variant, size, className }))}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
