"use client"

import { useEffect } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-bg")
      const floatingElements = document.querySelectorAll(".floating-element")

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })

      floatingElements.forEach((element, index) => {
        const speed = 0.3 + index * 0.05
        const yPos = Math.sin(scrolled * 0.01 + index) * 10
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-amber-50 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="parallax-bg absolute top-10 left-10 w-32 h-32 bg-cyan-600 neo-border transform rotate-45 opacity-20"></div>
        <div className="parallax-bg absolute top-1/4 right-20 w-24 h-24 bg-amber-600 neo-border transform -rotate-12 opacity-30"></div>
        <div className="parallax-bg absolute top-1/2 left-1/4 w-40 h-40 bg-black neo-border transform rotate-12 opacity-10"></div>
        <div className="parallax-bg absolute bottom-1/4 right-1/3 w-28 h-28 bg-cyan-600 neo-border transform rotate-45 opacity-25"></div>
        <div className="parallax-bg absolute bottom-10 left-1/2 w-36 h-36 bg-amber-600 neo-border transform -rotate-30 opacity-15"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="animate-fade-in-up">
          <Hero />
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <About />
        </div>
        <div className="animate-fade-in-up animation-delay-400">
          <Projects />
        </div>
        <div className="animate-fade-in-up animation-delay-600">
          <Skills />
        </div>
        <div className="animate-fade-in-up animation-delay-800">
          <Contact />
        </div>
      </div>
    </main>
  )
}
