import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Star,
  Calendar,
  Users,
  Code,
  Heart,
  Zap,
  Target,
  Award,
  X,
} from "lucide-react";
import student_progress from "../assets/student_progress.png";
import fitness from "../assets/fitness_tailors.png";
import football from "../assets/football.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  live?: string; // now optional
  status: string;
  duration: string;
  featured: boolean;
}

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Student Progress Tracking System",
      description:
        "A point-based behavioral management system with collaborative filtering algorithms to recommend improvement actions for low-performing students. Features multi-level dashboards for superadmin, teachers, and students with real-time point tracking.",
      image: student_progress,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Redux",
        "JWT",
      ],
      features: [
        "Initial 100-point allocation system",
        "Behavior-based point adjustments",
        "Superadmin dashboard (user management)",
        "Teacher dashboard (point management)",
        "Student dashboard (profile & analytics)",
        "Collaborative filtering recommendations",
        "Bonus points for extracurricular activities",
        "Real-time performance analytics",
        "Historical behavior tracking",
        "Interactive progress visualization",
      ],
      github: "https://github.com/shahiNaresh11/student-progress-tracking.git",
      status: "Completed",
      duration: "3 months",
      featured: true,
    },
    {
      id: 2,
      title: "Tournament Management System",
      description:
        "Comprehensive tournament platform with online registration, team management, and innovative opponent matching system to connect players with suitable competitors.",
      image: football,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Redux",
        "JWT",
      ],
      features: [
        "Online tournament registration",
        "Smart opponent matching algorithm",
        "Filter by location, time, and skill level",
        "Team management dashboard",
        "Real-time match scheduling",
        "Player rating system",
        "Results tracking and statistics",
        "Automated notifications",
        "Interactive tournament brackets",
        "Chat system for communication",
      ],
      github:
        "https://github.com/nigamrai/Tournament-Registration-and-Opponent-Finder.git",
      status: "Completed",
      duration: "2.5 months",
      featured: true,
    },
    {
      id: 3,
      title: "Learning Management System",
      description:
        "Interactive e-learning platform with course management, video streaming, and digital content delivery for both students and educators.",
      image:
        "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Multer",
        "Tailwind CSS",
      ],
      features: [
        "Course creation and management",
        "Video streaming with progress tracking",
        "Document/notes sharing",
        "Teacher content upload portal",
        "Student progress analytics",
        "Interactive quizzes and assessments",
        "Discussion forums",
        "Certificate generation",
        "Mobile-responsive design",
        "Admin analytics dashboard",
      ],
      github: "https://github.com/shahiNaresh11",
      status: "Completed",
      duration: "3 months",
      featured: false,
    },
    {
      id: 4,
      title: "Fitness Tailoring E-Commerce",
      description:
        "Bespoke tailoring solution allowing customers to select fabrics, submit measurements, and order custom-fitted clothing through an intuitive online interface.",
      image: fitness,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      features: [
        "Fabric selection gallery",
        "Digital measurement submission",
        "Custom garment configuration",
        "Order tracking system",
        "Tailor management dashboard",
        "Measurement saving for future orders",
        "3D garment preview",
        "Responsive design for all devices",
        "Customer review system",
        "Multi-payment options",
      ],
      github: "https://github.com/xiring-xrp/4th-sem-project.git",
      status: "Completed",
      duration: "2 months",
      featured: false,
    },
  ];

  const stats: Stat[] = [
    {
      label: "Total Projects",
      value: "7",
      icon: <Code className="w-5 h-5" />,
    },
    {
      label: "Technologies Used",
      value: "15+",
      icon: <Star className="w-5 h-5" />,
    },
    {
      label: "Development Time",
      value: "21 months",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      label: "Lines of Code",
      value: "100K+",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const principles: Principle[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cutting-Edge Tech",
      description: "Always using the latest proven technologies",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Optimized solutions that scale",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Clean Code",
      description: "Readable, maintainable, and well-documented",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric",
      description: "Solutions that delight end-users",
    },
  ];

  const handleShowAllFeatures = (projectId: number) => {
    setSelectedProject(projectId);
    setShowAllFeatures(true);
  };

  const handleCloseModal = () => {
    setShowAllFeatures(false);
    setSelectedProject(null);
  };

  const currentProject = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing my expertise through real-world applications
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 mx-auto">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Duration */}
                <div className="absolute top-4 right-4">
                  <div className="text-xs text-white bg-gray-900/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.duration}
                  </div>
                </div>

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-full text-white hover:bg-cyan-500 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-700 rounded-md text-cyan-400 border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-base font-semibold text-white mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start space-x-3 text-base text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 4 && (
                      <button
                        onClick={() => handleShowAllFeatures(project.id)}
                        className="text-sm text-gray-500 ml-4 hover:text-cyan-400 transition-colors duration-300"
                      >
                        +{project.features.length - 4} more features
                      </button>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <Github
                      size={16}
                      className="mr-2 group-hover:scale-110 transition-transform duration-300"
                    />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Principles */}
        <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Development{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Principles
              </span>
            </h3>
            <p className="text-lg text-gray-400">
              The core values that guide my technical approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 mb-5 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {principle.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {principle.title}
                </h4>
                <p className="text-base text-gray-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6">
              Have an Innovative Idea? Let's Create Magic!
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate to turn your ideas into exceptional digital
              experiences.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Features Modal */}
      {showAllFeatures && currentProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  All Features: {currentProject.title}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mt-1">
                      <span className="text-xs font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
