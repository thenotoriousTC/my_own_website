import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
const Index = () => {
  return <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-sm border-b border-neon-blue/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-orbitron font-bold text-xl neon-text">
              &lt;TC/&gt;
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-neon-blue transition-colors font-rajdhani font-medium">
                  {item}
                </a>)}
            </div>
            
            <button className="md:hidden p-2 text-neon-blue">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-neon-blue/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-rajdhani">© 2025 Taki Chiter & SiSoft. Crafted with passion and lots of coffee ☕</p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{
            animationDelay: '0.2s'
          }}></div>
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{
            animationDelay: '0.4s'
          }}></div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;