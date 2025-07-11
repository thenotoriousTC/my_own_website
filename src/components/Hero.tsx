
import { useEffect, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'dododod';

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center cyber-grid">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black neon-text mb-4">
            {text}
            <span className="animate-pulse">|</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-6"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-neon-blue mb-4 animate-slide-in">
          &gt; FULL STACK DEVELOPER
        </p>
        
        <p className="text-lg text-gray-300 mb-8 animate-slide-in font-rajdhani">
          From Algeria 🇩🇿 • Based in Lancashire, UK 🇬🇧
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['React', 'Node.js', 'TypeScript', 'Python'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 border border-neon-purple text-neon-purple rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button 
          onClick={scrollToProjects}
          className="group relative px-8 py-3 bg-transparent border-2 border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 font-orbitron font-semibold"
          aria-label="Scroll to portfolio section"
        >
          <span className="relative z-10">EXPLORE PORTFOLIO</span>
          <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-neon-blue" />
      </div>
    </section>
  );
};

export default Hero;
