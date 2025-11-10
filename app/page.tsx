import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Achievements from '@/components/Achievements'
import Experience from '@/components/Experience'
import TransformSection from '@/components/TransformSection'
import Work from '@/components/Work'
import ProjectCTA from '@/components/ProjectCTA'
import Contact from '@/components/Contact'
import SocialIcons from '@/components/SocialIcons'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      {/* <Achievements />
      <Experience /> */}
      <TransformSection />
      <Work />
      <ProjectCTA />
      <Contact />
      <SocialIcons />
    </main>
  )
}
