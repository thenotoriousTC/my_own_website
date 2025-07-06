
import { Mail, MapPin, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'takieddine.chiter@gmail.com',
      href: 'mailto:takieddine.chiter@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: Mail,
      label: 'Email (Business)',
      value: 'devco.chiter@gmail.com',
      href: 'mailto:devco.chiter@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+213 554 746 041',
      href: 'https://wa.me/213554746041',
      color: 'neon-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lancashire, UK',
      href: '#',
      color: 'neon-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'neon-blue'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'neon-purple'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'neon-green'
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 neon-text">
          &lt; CONTACT.INIT() /&gt;
        </h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-8">
            <div className="relative p-6 bg-cyber-gray/10 rounded-lg border border-neon-blue/30 backdrop-blur-sm">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-neon-blue"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-neon-purple"></div>
              
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-6 text-center">
                Let's Connect
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-center">
                Ready to build something amazing together? Whether you have a project in mind 
                or just want to chat about the latest in tech, I'm always excited to connect 
                with fellow innovators.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-4 p-3 bg-cyber-dark/30 rounded-lg border border-transparent hover:border-neon-blue/50 transition-all duration-300 group"
                  >
                    <item.icon className={`w-5 h-5 text-${item.color} group-hover:animate-pulse`} />
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white group-hover:text-neon-blue transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-cyber-dark/30 rounded-lg border border-transparent hover:border-${social.color}/50 transition-all duration-300 group`}
                >
                  <social.icon className={`w-6 h-6 text-${social.color} group-hover:animate-pulse`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
