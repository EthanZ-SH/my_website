import { Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { timelineItems } from '@/data/content'
import { FadeInSection } from '@/components/sections/FadeInSection'

export function ResumeSection() {
  return (
    <FadeInSection id="resume">
      <Card className="p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Resume</h2>
          <a href="/resume-placeholder.pdf" download>
            <Button className="gap-2">
              <Download size={15} />
              Download PDF
            </Button>
          </a>
        </div>

        <ol className="relative ml-3 space-y-8 border-l border-[var(--electric)]/25 pl-6">
          {timelineItems.map((item) => (
            <li key={`${item.period}-${item.title}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[var(--electric)] shadow-[0_0_12px_rgba(0,212,255,0.8)]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--electric)]/85">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.details}</p>
            </li>
          ))}
        </ol>
      </Card>
    </FadeInSection>
  )
}
