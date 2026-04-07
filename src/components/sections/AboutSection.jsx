import { Code2, Cloud, Globe, MonitorCog, Music2, PenSquare } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { skillBadges } from '@/data/content'
import { FadeInSection } from '@/components/sections/FadeInSection'

const icons = [Code2, Cloud, Globe, MonitorCog, Music2, PenSquare]

export function AboutSection() {
  return (
    <FadeInSection id="about">
      <Card className="p-6 sm:p-8">
        <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
            alt="Profile portrait"
            className="h-52 w-52 justify-self-center rounded-2xl border border-[var(--electric)]/25 object-cover shadow-[0_0_24px_rgba(0,212,255,0.18)]"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              I am a builder who enjoys turning complex ideas into clear products. My work spans cloud automation,
              web development, and creator-focused tools. I care about elegant engineering, useful interfaces, and
              shipping meaningful projects.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skillBadges.map((skill, i) => {
                const Icon = icons[i % icons.length]
                return (
                  <Badge key={skill} className="gap-1.5">
                    <Icon size={12} />
                    {skill}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
      </Card>
    </FadeInSection>
  )
}
