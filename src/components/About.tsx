
import { User, MapPin, Code, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 relative" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 neon-text">
          &lt; ABOUT_ME /&gt;
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative p-6 bg-cyber-gray/20 rounded-lg border border-neon-blue/30 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-neon-blue"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-neon-purple"></div>
              
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                Hello! I'm <span className="text-neon-blue font-semibold">Taki Chiter</span>, a passionate full-stack developer 
                bridging cultures and technologies. Born in Algeria and now calling Lancashire, UK my home, 
                I bring a unique perspective to every project I touch.
              </p>
              
              <p className="text-gray-300 mb-6">
                My journey in tech started with curiosity and evolved into expertise across modern web technologies. 
                I specialize in creating digital experiences that are not just functional, but memorable.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-neon-green">
                  <MapPin className="w-5 h-5" />
                  <span>Lancashire, UK</span>
                </div>
                <div className="flex items-center space-x-3 text-neon-purple">
                  <User className="w-5 h-5" />
                  <span>Full Stack Dev</span>
                </div>
                <div className="flex items-center space-x-3 text-neon-blue">
                  <Code className="w-5 h-5" />
                  <span>5+ Languages</span>
                </div>
                <div className="flex items-center space-x-3 text-neon-orange">
                  <Coffee className="w-5 h-5" />
                  <span>Coffee Powered</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile image */}
              <div className="w-full h-full rounded-lg border border-neon-blue/50 overflow-hidden relative">
                <img 
                  src="/lovable-uploads/936fc0a8-1d7d-4e30-a463-e9cb961c4801.png" 
                  alt="Taki Chiter - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Cyberpunk overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-neon-blue font-orbitron font-bold">TAKI.EXE</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-neon-green rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full animate-float"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-neon-blue rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
