import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  GitBranch,
  Cloud,
  Star,
  Settings,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: {
    name: string;
    icon: string;
  }[];
}

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Skills: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Next.js', icon: '🔺' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'HTML5/CSS3', icon: '🎨' },
        { name: 'Tailwind CSS', icon: '💨' },
        { name: 'Redux', icon: '🔄' },
       
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'GraphQL', icon: '📊' },
        { name: 'Socket.io', icon: '⚡' },
        { name: 'JWT Auth', icon: '🔐' },
        
      ]
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Mongoose', icon: '📊' },
      
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Git/GitHub', icon: '🐙' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Netlify', icon: '🌐' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Postman', icon: '📮' },
       
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      icon: <Star className="w-6 h-6" />,
      title: '4 Projects Completed',
      description: 'Successfully delivered end-to-end solutions'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: '70,000+ Lines of Code',
      description: 'Written across various projects'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: '500+ Commits',
      description: 'Consistent development workflow'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Deployment Success',
      description: ' projects deployed successfully'
    }
  ];

  return (
    <section id="skills" className=" bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and expertise I bring to every project
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 hover:border-cyan-400/30"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Development <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <p className="text-lg text-gray-400">Milestones that demonstrate my expertise and dedication</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.title}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 mb-5 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{achievement.title}</h4>
                <p className="text-base text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
     
        {/* Tech Stack Callout */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-white"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;