import { Card } from '@/components/ui/card'
import { videoEmbeds } from '@/data/content'
import { FadeInSection } from '@/components/sections/FadeInSection'

export function MusicSection() {
  return (
    <FadeInSection id="music">
      <Card className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Music</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Music is where I reset and create. I share guitar and vocal covers of tracks that inspire me, plus occasional
          original arrangements.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {videoEmbeds.map((video) => (
            <div
              key={video.title}
              className="overflow-hidden rounded-xl border border-[var(--electric)]/20 bg-black/25 shadow-[0_0_20px_rgba(0,212,255,0.08)]"
            >
              <div className="aspect-video">
                <iframe
                  title={video.title}
                  src={video.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </FadeInSection>
  )
}
