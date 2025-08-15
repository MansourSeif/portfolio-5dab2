"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

// Updated typewriter roles for portfolio impact
const ROLES = ["DEVELOPER", "DESIGNER" ,  "CODER"];
export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = ROLES[currentRoleIndex];

    if (isTyping) {
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentRoleIndex]);

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating-element absolute top-20 left-10 w-16 h-16 bg-cyan-600 neo-border opacity-30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="floating-element absolute top-40 right-20 w-12 h-12 bg-amber-600 neo-border opacity-40 animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-none animate-slide-in-left">
                <span className="inline-block animate-bounce-in animation-delay-100">I'M A</span>
                <br />
                <span className="text-amber-600">
                  <span className="typewriter-text">
                    {currentText}
                  </span>
                </span>
                <br />
                <span className="inline-block animate-bounce-in animation-delay-300">BUILDING</span>
                <br />
                <span className="inline-block animate-bounce-in animation-delay-400"> DIGITAL EXPERIENCE</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-lg animate-fade-in animation-delay-600">
          
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up animation-delay-800">
              <a href="#contact">
              <Button
                size="lg"
                className="group bg-amber-600 hover:bg-amber-700 text-white neo-border neo-shadow neo-hover font-bold text-lg px-8 py-4 uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:rotate-1 animate-pulse-glow"
                >
                <span className="ml-2">Hire Me</span>
                <span className="group-hover:animate-bounce ml-2">→</span>
              </Button>
                </a>
              <a href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="group bg-white hover:bg-gray-50 text-black neo-border neo-shadow neo-hover font-bold text-lg px-8 py-4 uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:-rotate-1" 
                >
                <span className="ml-2" >View Projects</span>
                <span className="group-hover:animate-bounce ml-2">→</span>
              </Button>
                </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="bg-cyan-600 neo-border-thick neo-shadow-lg p-8 transform rotate-3 animate-float hover:animate-wiggle transition-all duration-500">
              <div className="bg-white neo-border p-6 transform -rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="bg-amber-600 neo-border p-4 transform rotate-3 hover:-rotate-3 transition-transform duration-300">
                  <div className="bg-black p-6 text-center hover:scale-105 transition-transform duration-300">
                    <h2 className="text-white font-bold text-2xl uppercase tracking-wider animate-text-glow">
                      <span className="inline-block animate-bounce animation-delay-100">CREATIVE CODER</span>
                      <br />
                      <span className="inline-block animate-bounce animation-delay-200">DIGITAL ARCHITECT</span>
                      <br />
                      <span className="inline-block animate-bounce animation-delay-300">WEB WIZARD</span>
                      <br />
                    </h2>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



