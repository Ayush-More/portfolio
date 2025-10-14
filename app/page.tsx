import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import SocialIcons from '@/components/SocialIcons'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <SocialIcons />
    </main>
  )
}
