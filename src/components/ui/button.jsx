import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--electric)]/50',
  {
    variants: {
      variant: {
        default:
          'border border-[var(--electric)]/40 bg-[var(--electric)]/10 text-[var(--electric)] hover:shadow-[0_0_18px_rgba(0,212,255,0.35)] hover:border-[var(--electric)]/70',
        ghost: 'text-slate-200 hover:bg-white/5 hover:text-[var(--electric)]',
        secondary:
          'border border-white/10 bg-white/5 text-slate-100 hover:border-[var(--electric)]/35',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
