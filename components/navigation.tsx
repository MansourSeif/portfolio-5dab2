"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white neo-border-thick neo-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <h1 className="text-3xl font-extrabold tracking-widest text-black group-hover:text-amber-600 transition-colors">
              SEIF<span className="text-amber-600 group-hover:text-black">.MANSOUR</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-black hover:text-amber-600 font-bold uppercase tracking-widest transition-all duration-200 group"
              >
                {item.name}
                {/* Animated borders */}
                {/* Top */}
                <span className="absolute right-0 top-0 w-0 h-1.5 bg-black transition-all duration-200 ease-linear group-hover:w-full group-hover:skew-x-[-6deg]"></span>

                {/* Bottom */}
                <span className="absolute left-0 bottom-0 w-0 h-1.5 bg-amber-500 transition-all duration-200 ease-linear group-hover:w-full group-hover:skew-x-6"></span>

                {/* Left */}
                <span className="absolute left-0 bottom-0 w-1.5 h-0 bg-black transition-all duration-200 ease-linear group-hover:h-full group-hover:skew-y-[-6deg]"></span>

                {/* Right */}
                <span className="absolute right-0 top-0 w-1.5 h-0 bg-amber-500 transition-all duration-200 ease-linear group-hover:h-full group-hover:skew-y-6"></span>


              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-amber-600 hover:bg-amber-700 text-white neo-border font-bold flex items-center gap-2"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
              MENU
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-4 py-4 bg-white neo-border-t space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-black hover:text-amber-600 font-bold uppercase tracking-widest transition-all duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {/* Animated border bottom for mobile */}
                  <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}