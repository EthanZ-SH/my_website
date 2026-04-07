import { Navbar } from '@/components/layout/Navbar'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { HomeSection } from '@/components/sections/HomeSection'
import { MusicSection } from '@/components/sections/MusicSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ResumeSection } from '@/components/sections/ResumeSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg-base)] text-slate-200">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <MusicSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
