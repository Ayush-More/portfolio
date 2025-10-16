import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
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
      <TransformSection />
      <Work />
      <ProjectCTA />
      <Contact />
      <SocialIcons />
    </main>
  )
}
