"use client"
import { useEffect, useState } from "react"

export function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      skills: ["React", "Next.js", "Wordpress", "Tailwind CSS"],
      color: "bg-amber-500",
      hoverColor: "hover:bg-amber-400",
      shadowColor: "shadow-amber-500/50",
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB"],
      color: "bg-cyan-500",
      hoverColor: "hover:bg-cyan-400",
      shadowColor: "shadow-cyan-500/50",
    },
    {
      title: "TOOLS",
      skills: ["Git", "Figma", "Postman", "Prisma"],
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-400",
      shadowColor: "shadow-purple-500/50",
    },
  ]

  const [techGlitch, setTechGlitch] = useState("STACK")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const glitchChars = ["5TACK", "ST@CK", "ST4CK", "ST4C5", "STACK"]

    const glitchInterval = setInterval(() => {
      const randomGlitch = glitchChars[Math.floor(Math.random() * glitchChars.length)]
      setTechGlitch(randomGlitch)

      setTimeout(() => setTechGlitch("STACK"), 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-5xl sm:text-xl lg:text-7xl font-black text-black leading-none mb-8 relative">
            <span className="inline-block hover:animate-bounce cursor-default transition-transform duration-300 hover:scale-110 hover:rotate-2">
              TECH
            </span>
            <br />
            <span className="text-cyan-500 inline-block hover:animate-pulse cursor-default relative transition-all duration-300 hover:scale-105 hover:-rotate-1">
              {techGlitch}
              <div className="absolute -inset-1 bg-cyan-500/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl font-medium leading-relaxed">
            Modern technologies and tools I use to build scalable, performant applications. Always learning, always
            evolving.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full max-w-6xl">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`space-y-6 transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`${category.color} ${category.hoverColor} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${category.shadowColor} p-6 text-center transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer group`}
                >
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider group-hover:scale-110 transition-transform duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 hover:bg-gray-50 transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer group transform ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${(index * 200) + (skillIndex * 100) + 400}ms` }}
                    >
                      <span className="font-black text-black uppercase tracking-wider group-hover:scale-105 inline-block transition-transform duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 bg-black border-4 border-black shadow-[12px_12px_0px_0px_rgba(59,130,246,0.5)] p-8 text-center transform transition-all duration-1000 hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,0.5)] cursor-pointer ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-wider hover:scale-105 transition-transform duration-300 inline-block">
            CONTINUOUS LEARNING
          </h3>
          <p className="text-gray-300 text-lg font-medium leading-relaxed">
           Currently exploring: AI/ML integration, real-time data processing, cloud-native architectures, and advanced system design patterns.
          </p>
        </div>

        <div className="fixed top-20 right-10 w-4 h-4 bg-amber-500 border-2 border-black animate-bounce opacity-20 hidden lg:block"></div>
        <div className="fixed bottom-32 left-10 w-6 h-6 bg-cyan-500 border-2 border-black animate-pulse opacity-20 hidden lg:block"></div>
        <div className="fixed top-1/2 right-20 w-3 h-3 bg-purple-500 border-2 border-black animate-ping opacity-20 hidden lg:block"></div>
      </div>
    </section>
  )
}
