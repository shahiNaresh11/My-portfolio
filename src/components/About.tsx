import React from 'react';
import { Code, Database, Globe, Smartphone, Award, Heart, Zap, Target, User, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Frontend Mastery',
      description: 'React, Next.js, TypeScript',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: 'Backend Excellence',
      description: 'Node.js, Express, MongoDB',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Mobile Development',
      description: 'React Native expertise',
      color: 'from-orange-400 to-red-400'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '4', label: 'Major Projects' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion-Driven',
      description: 'I love what I do and it shows in every project'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'Always exploring new technologies and approaches'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Results Focused',
      description: 'Delivering solutions that exceed expectations'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'Clean code and best practices are non-negotiable'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate MERN Stack Developer crafting exceptional digital experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-full hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl">
              {/* Profile Image Placeholder */}
              <div className="relative mb-8">
                <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                    <User className="w-20 h-20 text-gray-400" />
                  </div>
                </div>
              </div>

             
       {/* Basic Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">MERN Developer</h3>
                <div className="flex items-center justify-center text-gray-400 mb-3 text-lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Kapan, Kathmandu</span>
                </div>
                <div className="flex items-center justify-center text-gray-400 mb-3 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>3+ Years Experience</span>
                </div>
              
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-base text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story & Skills */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Story Section */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <User className="w-5 h-5 text-white" />
                </div>
                My Journey
              </h3>
              
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> from Nepal 
                  with over 3 years of experience building modern, scalable web applications that solve real-world problems.
                </p>
                <p>
                  My journey started with curiosity about how websites work and evolved into a career where I create 
                  <span className="text-purple-400 font-semibold"> end-to-end digital solutions</span>. I specialize in 
                  building responsive, accessible applications using cutting-edge technologies.
                </p>
                <p>
                  Having successfully completed <span className="text-pink-400 font-semibold">4 major projects</span> across 
                  various domains including e-commerce, social platforms, and enterprise solutions, I bring both technical 
                  expertise and practical experience to every project.
                </p>
              </div>
            </div>

            {/* Tech Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {highlights.map((highlight) => (
                <div 
                  key={highlight.title}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer hover:shadow-md"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{highlight.title}</h4>
                  <p className="text-base text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 mb-20 hover:shadow-lg">
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-white mb-5">
              What <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Drives Me</span>
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">The core principles that guide my work and passion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 mb-5 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                <p className="text-base text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>     
      </div>
    </section>
  );
};

export default About;