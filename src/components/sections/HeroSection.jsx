import { motion } from 'framer-motion'
import { GitBranch, UserRound } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FadeInSection } from '@/components/sections/FadeInSection'

export function HeroSection() {
  const MotionDiv = motion.div

  return (
    <FadeInSection id="hero">
      <Card className="relative overflow-hidden p-6 sm:p-10">
        <div className="hero-grid" />
        <MotionDiv
          aria-hidden
          className="pointer-events-none absolute -left-24 top-0 h-52 w-52 rounded-full bg-[var(--electric)]/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <MotionDiv
          aria-hidden
          className="pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-[var(--electric)]">Personal Portfolio</p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">Your Name Here</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Cloud-focused developer crafting fast web experiences, automation tools, and music-infused side projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
              <Button className="gap-2">
                <GitBranch size={16} />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
              <Button variant="secondary" className="gap-2">
                <UserRound size={16} />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </Card>
    </FadeInSection>
  )
}
