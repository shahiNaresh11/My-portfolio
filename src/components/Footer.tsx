import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp, ExternalLink, Sparkles } from 'lucide-react';

interface FooterProps {
  scrollToSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Mobile App Development', icon: '📱' },
    { name: 'API Development', icon: '⚡' },
    { name: 'Database Design', icon: '🗄️' },
    { name: 'UI/UX Implementation', icon: '🎨' },
    { name: 'Performance Optimization', icon: '🚀' }
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      url: 'https://github.com/nareshShahi',
      name: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <Linkedin size={22} />,
      url: 'https://linkedin.com/in/naresh-shahi',
      name: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <Mail size={22} />,
      url: 'mailto:naresh.shahi@example.com',
      name: 'Email',
      color: 'hover:bg-green-600'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 6s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-9 h-9 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Naresh Shahi
                </h3>
                <div className="flex items-center space-x-2">
                  <p className="text-lg text-gray-300">MERN Stack Developer</p>
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Passionate about creating innovative web solutions using modern technologies. 
                Transforming ideas into powerful digital experiences that make a difference.
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-600/50 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-transparent`}
                    title={social.name}
                  >
                    {social.icon}
                    <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>Quick Links</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </h4>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="group flex items-center space-x-3 text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Services */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-white flex items-center space-x-2">
              <span>Services</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </h4>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="group flex items-center space-x-3 text-lg text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700/50 pt-12">
          <div className="flex flex-col md:flex-row  items-center justify-between space-y-6 md:space-y-0">
            <div className=" flex ms-80 space-x-2 text-lg text-gray-400">
              <span>© {currentYear} Naresh Shahi. Built with</span>
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-3 text-lg text-gray-400 hover:text-cyan-400 transition-all duration-300"
            >
              <span>Back to top</span>
              <div className="p-3 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-600/50 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-300 group-hover:scale-110">
                <ArrowUp size={18} className="group-hover:animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
          title="Scroll to top"
          style={{
            animation: 'fadeInUp 0.5s ease-out, float 3s ease-in-out infinite 0.5s'
          }}
        >
          <ArrowUp size={20} />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-50 -z-10"></div>
        </button>
      )}

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;