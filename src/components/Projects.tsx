import { ExternalLink, Github, Zap } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: 'CyberCommerce',
    description: 'A futuristic e-commerce platform with AI-powered recommendations and real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'cyber-project-1',
    color: 'neon-blue'
  }, {
    title: 'QuantumTask',
    description: 'Next-gen project management tool with advanced analytics and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: 'cyber-project-2',
    color: 'neon-purple'
  }, {
    title: 'NeuralNet Dashboard',
    description: 'Real-time data visualization dashboard for machine learning model monitoring and analytics.',
    tech: ['Python', 'Django', 'React', 'D3.js'],
    image: 'cyber-project-3',
    color: 'neon-green'
  }];
  return <section className="py-20 px-4 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 neon-text">
          &lt; PROJECTS.PORTFOLIO /&gt;
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={project.title} className="group relative bg-cyber-gray/10 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-500 backdrop-blur-sm overflow-hidden" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-cyber-dark to-cyber-gray overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-neon-blue animate-pulse" />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  
                  
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs bg-cyber-dark/50 text-neon-blue border border-neon-blue/30 rounded-full">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default Projects;