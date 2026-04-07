import { cn } from '@/lib/utils'

function Card({ className, ...props }) {
  return <div className={cn('section-card neon-hover', className)} {...props} />
}

function CardHeader({ className, ...props }) {
  return <div className={cn('space-y-1.5 p-6', className)} {...props} />
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn('text-xl font-semibold tracking-tight text-[var(--text-main)]', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <p className={cn('text-sm leading-relaxed text-[var(--text-soft)]', className)} {...props} />
  )
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
