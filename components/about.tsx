import { useState, useEffect } from "react";

export function About() {
  const [aboutGlitch, setAboutGlitch] = useState("ME");

  useEffect(() => {
    const glitchChars = ["M3", "M€", "M£", "M∑", "ME"];

    const glitchInterval = setInterval(() => {
      const randomGlitch =
        glitchChars[Math.floor(Math.random() * glitchChars.length)];
      setAboutGlitch(randomGlitch);

      setTimeout(() => setAboutGlitch("ME"), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Title */}
          <div className="lg:col-span-1">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-none mb-8 relative">
              <span className="inline-block hover:animate-bounce cursor-default">
                ABOUT
              </span>
              <br />
              <span className="text-cyan-600 inline-block hover:animate-bounce cursor-default relative">
                {aboutGlitch}
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-amber-50 neo-border neo-shadow p-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                I'm a passionate full-stack developer who transforms complex
                problems into elegant digital solutions. With expertise
                spanning frontend frameworks to backend architectures, I build
                scalable applications that deliver exceptional user
                experiences.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                My journey in software development has taken me through startups
                and enterprise environments, where I've honed my skills in
                modern web technologies, cloud platforms, and agile
                methodologies. I believe in writing clean, maintainable code
                and staying current with industry best practices.
              </p>
            </div>

            <div className="bg-gray-800 neo-border neo-shadow p-8">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
                Experience Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-bold">
                      Full-Stack Developer Intern
                    </h4>
                    <p className="text-gray-300">
                      Developed web applications using React, Node.js, and Prisma
                      for client projects and academic platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-bold">
                      React & Frontend Specialist
                    </h4>
                    <p className="text-gray-300">
                      Built responsive and interactive interfaces using
                      React.js, TailwindCSS, and Angular for various projects
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-bold">
                      Project Collaborator
                    </h4>
                    <p className="text-gray-300">
                      Contributed to full-stack web projects, implementing React
                      and Node.js features and optimizing code for performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
           <div className="fixed top-20 right-10 w-4 h-4 bg-amber-500 border-2 border-black animate-bounce opacity-20 hidden lg:block"></div>
        <div className="fixed bottom-32 left-10 w-6 h-6 bg-cyan-500 border-2 border-black animate-pulse opacity-20 hidden lg:block"></div>
        <div className="fixed top-1/2 right-20 w-3 h-3 bg-purple-500 border-2 border-black animate-ping opacity-20 hidden lg:block"></div>
      </div>
    </section>
  );
}
