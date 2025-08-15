"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [glitchText, setGlitchText] = useState("LET'S")

  useEffect(() => {
    setIsVisible(true)

    // Glitch effect for the main title
    const glitchInterval = setInterval(() => {
      const glitchChars = ["L3T'S", "L€T'S", "LET5", "L3T5", "LET'S"]
      const randomGlitch = glitchChars[Math.floor(Math.random() * glitchChars.length)]
      setGlitchText(randomGlitch)

      setTimeout(() => setGlitchText("LET'S"), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const contactMethods = [
    {
      title: "DIRECT EMAIL",
      subtitle: "Fastest response time",
      href: "mailto:seiif.mansour@gmail.com",
      color: "bg-amber-500",
      hoverColor: "hover:bg-amber-600",
    },
    {
      title: "PHONE",
      subtitle: "Click to copy number",
      onClick: () => {
        navigator.clipboard.writeText("+216 23490491")
        
      },
      color: "bg-cyan-500",
      hoverColor: "hover:bg-cyan-600",
    },
    {
      title: "LOCATION",
      subtitle: "Sousse, Tunisia",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
  ]

  const socialLinks = [
    { name: "GITHUB", url: "https://github.com/MansourSeif", color: "bg-black" },
    { name: "LINKEDIN", url: "https://linkedin.com/in/seif-mansour", color: "bg-cyan-600" },
    { name: "INSTAGRAM", url: "https://www.instagram.com/se.if_/", color: "bg-purple-600" },
  ]

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50 relative overflow-hidden parallax-container">


      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Creative Contact Section */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <div className="relative">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-none mb-8 relative">
                <span className="inline-block hover:animate-bounce cursor-default">{glitchText}</span>
                <br />
                <span className="text-amber-600 inline-block hover:animate-pulse cursor-default relative">
                  CONNECT
                </span>
              </h2>
              <p className="text-xl text-black font-bold leading-relaxed bg-white p-3 border-4 border-black transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                No boring forms here. Pick your preferred weapon of communication:
              </p>
            </div>

            {/* Interactive Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group  cursor-pointer transform transition-all duration-300 ${hoveredCard === index ? "scale-105 -rotate-2" : "hover:scale-102 hover:rotate-1"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={method.onClick}
                >
                  {method.href ? (
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <ContactCard method={method} isHovered={hoveredCard === index} />
                    </a>
                  ) : (
                    <ContactCard method={method} isHovered={hoveredCard === index} />
                  )}
                </div>
              ))}
            </div>

            {/* Social Links with More Personality */}
            <div
              className={`pt-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
              <h3 className="font-black text-black uppercase tracking-wider mb-4 text-xl bg-amber-400 p-2 border-4 border-black inline-block transform rotate-1">
                OR FIND ME HERE:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {socialLinks.map((social, index) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                    <Button
                      className={`w-full ${social.color} hover:bg-black text-white border-4 border-black font-black uppercase tracking-wider flex items-center gap-2 p-3 h-auto transform transition-all duration-300 hover:scale-110 hover:-rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      <span className="text-xs">{social.name}</span>
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`relative h-full min-h-[400px] transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <div className="absolute inset-0 bg-amber-600 border-6 border-black z-0 transform rotate-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="absolute inset-3 bg-black border-6 border-white z-10 flex items-center justify-center transform -rotate-2">
              <div className="text-center p-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-3 bg-cyan-600 p-2 border-4 border-white inline-block transform rotate-1">
                  DON'T BE A STRANGER
                </h3>
                <p className="text-amber-300 mb-6 text-lg font-bold">
                  Let’s connect and make something awesome together!
                </p>
                <div className="inline-block border-4 border-white bg-amber-400 p-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <div className="bg-black border-4 border-amber-400 p-4 text-amber-400 font-mono text-base font-bold transform rotate-1">
                    <div className="animate-pulse">$ npm init collaboration</div>
                    <div className="text-white mt-2">with Seif Mansour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-12 pt-6 border-t-6 border-black text-center transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <p className="text-black font-black uppercase tracking-wider text-lg bg-white p-3 border-4 border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            © {new Date().getFullYear()} SEIF MANSOUR — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ method, isHovered }: { method: any; isHovered: boolean }) {
  return (
    <div
      className={`${method.color} ${method.hoverColor} border-4 border-black p-4 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${isHovered ? "bg-black text-white" : "text-black"}`}
    >
      <div className="flex items-center gap-3">
        <div className={`text-4xl transition-all duration-300 ${isHovered ? "animate-spin text-amber-400" : ""}`}>
          {method.icon}
        </div>
        <div>
          <h3 className="font-black uppercase tracking-wider mb-1 text-base">{method.title}</h3>
          <p className={`text-sm font-bold ${isHovered ? "text-amber-300" : "opacity-80"}`}>{method.subtitle}</p>
        </div>
      </div>
    </div>
  )
}
