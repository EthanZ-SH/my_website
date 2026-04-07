import { GitBranch, Link2, Mail } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { FadeInSection } from '@/components/sections/FadeInSection'

export function ContactSection() {
  return (
    <FadeInSection id="contact" className="pb-4">
      <Card className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Open to collaborations, freelance opportunities, and interesting product ideas.
        </p>
        <div className="mt-5 flex flex-col gap-3 text-sm sm:text-base">
          <a href="mailto:youremail@example.com" className="neon-link inline-flex items-center gap-2">
            <Mail size={16} />
            youremail@example.com
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="neon-link inline-flex items-center gap-2">
            <GitBranch size={16} />
            github.com/your-username
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="neon-link inline-flex items-center gap-2"
          >
            <Link2 size={16} />
            linkedin.com/in/your-profile
          </a>
        </div>
      </Card>
    </FadeInSection>
  )
}
