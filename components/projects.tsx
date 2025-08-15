"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ExternalLink, Github } from "lucide-react" // Import the icons

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [projectsGlitch, setProjectsGlitch] = useState("PROJECTS");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "SAAS PLATFORM",
      description:
        "Full-stack SaaS application with user authentication, subscription management, and real-time analytics dashboard. Built with modern architecture patterns and scalable infrastructure.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      github: "https://github.com/username/saas-platform",
      live: "https://saas-platform.vercel.app",
      image: "/modern-ecommerce-website.png",
    },
    {
      title: "E-COMMERCE API",
      description:
        "RESTful API with microservices architecture, Redis caching, and comprehensive testing suite. Handles 10k+ requests per minute with 99.9% uptime.",
      tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Jest"],
      color: "bg-gradient-to-br from-cyan-500 to-blue-600",
      github: "https://github.com/username/ecommerce-api",
      live: "https://api.ecommerce-demo.com",
      image: "/task-management-dashboard.png",
    },
    {
      title: "REAL-TIME CHAT",
      description:
        "WebSocket-powered chat application with rooms, file sharing, and message encryption. Supports 1000+ concurrent users with real-time message delivery.",
      tech: ["React", "Socket.io", "MongoDB", "AWS S3", "Docker"],
      color: "bg-gradient-to-br from-gray-800 to-black",
      github: "https://github.com/username/realtime-chat",
      live: "https://chat-app-demo.netlify.app",
      image: "/ai-chatbot-interface.png",
    },
    {
      title: "AI CONTENT GENERATOR",
      description:
        "AI-powered content creation tool with OpenAI integration and custom prompt engineering. Generates high-quality content for blogs, social media, and marketing.",
      tech: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      github: "https://github.com/username/ai-content-gen",
      live: "https://ai-content-generator.vercel.app",
      image: "/social-media-analytics-dashboard.png",
    },
    {
      title: "BLOCKCHAIN WALLET",
      description:
        "Secure cryptocurrency wallet with multi-chain support, DeFi integrations, and advanced security features. Handles millions in transaction volume.",
      tech: ["React Native", "Web3.js", "Solidity", "Node.js", "MongoDB"],
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      github: "https://github.com/username/crypto-wallet",
      live: "https://crypto-wallet-demo.app",
      image: "/cryptocurrency-wallet-interface.png",
    },
  ]

  const nextProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
      setIsTransitioning(false)
    }, 400)
  }

  const prevProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
      setIsTransitioning(false)
    }, 400)
  }

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentProject) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject(index)
      setIsTransitioning(false)
    }, 400)
  }

  useEffect(() => {
    const glitchChars = ["PR0JECTS", "PRØJECTS", "PR0J3CTS", "PROJECT5", "PROJECTS"];

    const glitchInterval = setInterval(() => {
      const randomGlitch = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      setProjectsGlitch(randomGlitch);

      setTimeout(() => setProjectsGlitch("PROJECTS"), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);


  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50 relative overflow-hidden parallax-container"
    >
      
      <div className="parallax-layer parallax-back opacity-20" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 neo-border transform rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 neo-border transform -rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-black neo-border transform rotate-12 animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-amber-600 neo-border transform rotate-45 animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-none mb-8 relative">
            <span className="inline-block hover:animate-bounce cursor-default">
              MY
            </span>
            <br />
            <span className="text-amber-600 inline-block hover:animate-pulse cursor-default relative">
              {projectsGlitch}
            </span>
          </h2>

          <p
            className="text-xl text-gray-700 max-w-2xl animate-slide-up"
          >
            Real-world applications built with modern tech stacks. Navigate through my portfolio of full-stack projects.
          </p>
        </div>

        <div className="relative">
          {/* Left arrow outside the card */}
          <button
            onClick={prevProject}
            disabled={isTransitioning}
            className="absolute ml-[-60px] left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-amber-600 text-white p-4 neo-border-thick neo-shadow-lg font-bold text-2xl transform transition-all-smooth hover:scale-110 z-10 disabled:opacity-50 card-3d rounded-lg"
            aria-label="Previous project"
          >
            ←
          </button>

          {/* Project card without animations */}
          <div className="overflow-hidden neo-border-thick neo-shadow-lg bg-white card-3d rounded-lg">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentProject * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="relative neo-border-thick h-64 lg:h-80 flex items-center justify-center overflow-hidden bg-white">
                        {/* Background image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-30"
                          style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 ${project.color} opacity-80`}></div>

                        {/* Static decorative elements */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-4 left-4 w-8 h-8 border-4 border-white transform rotate-45"></div>
                          <div className="absolute bottom-4 right-4 w-6 h-6 border-4 border-white transform -rotate-45"></div>
                          <div className="absolute top-1/2 left-1/2 w-12 h-12 border-4 border-white transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                        </div>

                      </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-black uppercase tracking-wider mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-800 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider neo-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button
                          size="lg"
                          className="bg-black hover:bg-gray-800 text-white neo-border neo-shadow font-bold uppercase tracking-wider card-3d"
                          onClick={() => window.open(project?.live)}
                        >
                          View Live
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-white hover:bg-gray-50 text-black neo-border neo-shadow font-bold uppercase tracking-wider card-3d"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-5 w-5" />
                          GitHub
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow outside the card */}
          <button
            onClick={nextProject}
            disabled={isTransitioning}
            className="absolute mr-[-60px] right-0 top-1/2 -translate-y-1/2 translate-x-full bg-amber-600 text-white p-4 neo-border-thick neo-shadow-lg font-bold text-2xl transform transition-all-smooth hover:scale-110 z-10 disabled:opacity-50 card-3d rounded-lg"
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              disabled={isTransitioning}
              className={`w-8 h-8 neo-border-thick transition-all-smooth transform hover:scale-150 hover:rotate-45 rounded-lg ${index === currentProject ? "bg-black " : "bg-white hover:bg-gray-200"
                } disabled:opacity-50`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <span className="text-4xl font-bold text-black uppercase tracking-wider glitch-effect bg-white neo-border neo-shadow px-6 py-3 inline-block">
            {String(currentProject + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        
      </div>
    </section>
  )
}