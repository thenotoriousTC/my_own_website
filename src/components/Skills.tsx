
import { Code, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
      color: 'neon-blue'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL'],
      color: 'neon-purple'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      color: 'neon-green'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Linux'],
      color: 'neon-orange'
    },
    {
      title: 'Tools',
      icon: GitBranch,
      skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira'],
      color: 'neon-pink'
    },
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
      color: 'neon-blue'
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 neon-text">
          &lt; SKILLS.ARRAY /&gt;
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 bg-cyber-gray/10 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <category.icon className={`w-8 h-8 text-${category.color} mr-3`} />
                  <h3 className="text-xl font-orbitron font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-2 bg-cyber-dark/50 rounded border-l-2 border-transparent hover:border-neon-blue transition-all duration-300"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
