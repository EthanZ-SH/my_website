import { GitBranch } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/content'
import { FadeInSection } from '@/components/sections/FadeInSection'

export function ProjectsSection() {
  return (
    <FadeInSection id="projects">
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="muted">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="neon-link inline-flex items-center gap-2 text-sm font-medium"
                >
                  <GitBranch size={14} />
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </FadeInSection>
  )
}
