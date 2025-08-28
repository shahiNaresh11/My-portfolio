import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, MapPin, Calendar } from 'lucide-react';
import naresh from  '../assets/20250727_2039_video.mp4'
interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
 'React Developer',
  'MERN Stack Developer', 
  'Frontend Developer',
  'JavaScript Developer'

  ];

  // Function to handle CV download
const handleDownloadCV = () => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = '/NareshShahi_Cv.pdf'; // Path to your CV in public folder
  link.download = 'NareshShahi_CV.pdf'; // The filename for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  useEffect(() => {
    const typeRole = () => {
      const currentRole = roles[currentRoleIndex];
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(currentRole.slice(0, i));
        i++;
        if (i > currentRole.length) {
          clearInterval(timer);
          setTimeout(() => {
            const deleteTimer = setInterval(() => {
              setTypedText(currentRole.slice(0, i));
              i--;
              if (i < 0) {
                clearInterval(deleteTimer);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    typeRole();
  }, [currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
     <div className="mb-4">
     <div className="w-44 mt-16 h-44 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
     <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
      <video
        src={naresh}
        className="w-full h-full object-cover rounded-full"
        autoPlay
        loop
        muted
      />
    </div>
  </div>
</div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Naresh Shahi
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="text-xl mt-4 sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
              {typedText}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate MERN Stack Developer with experience  in building scalable web applications. 
            I transform ideas into powerful digital solutions using modern technologies.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Nepal</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>3+ Years Experience</span>
            </div>
       <div className="flex items-center space-x-2 text-gray-300">
        <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm text-white font-bold">7+</span>
        <span>Projects Completed</span>
      </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/nareshShahi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/naresh-shahi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:naresh.shahi@example.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                View My Projects
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <button 
  onClick={handleDownloadCV}
  className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
>
  <Download size={18} className="mr-2 group-hover:animate-bounce" />
  Download Resume
</button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;