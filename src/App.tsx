import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tanmay Kumar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-700/50 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-0">
          <div className="animate-fade-in-up">
            {/* Profile Image Placeholder */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-4 border-blue-500/30 flex items-center justify-center overflow-hidden group hover:scale-105 transition-all duration-300">
                {/* Placeholder content - replace with your image */}
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">TK</span>
                  </div>
                  <p className="text-xs text-gray-400">Profile Photo</p>
                </div>
                {/* When you add your image, replace the above div with: */}
                {/* <img src="/path-to-your-image.jpg" alt="Tanmay Kumar" className="w-full h-full object-cover" /> */}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Tanmay Kumar
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 h-6 sm:h-8">
              <span className="animate-typewriter">Experienced Backend Developer</span>
            </div>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              More than 4 years of experience with strong interest in algorithmic problem-solving and competitive programming.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-up animation-delay-300 px-4">
            <a href="mailto:tanmaykumar950@gmail.com" className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-500/30 text-sm sm:text-base">
              <Mail size={18} className="sm:w-5 sm:h-5" />
              <span className="truncate">tanmaykumar950@gmail.com</span>
            </a>
            <a href="tel:+919507373173" className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-green-600/20 hover:bg-green-600/30 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-green-500/30 text-sm sm:text-base">
              <Phone size={18} className="sm:w-5 sm:h-5" />
              <span>+91 9507373173</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-600">
            <a href="https://www.linkedin.com/in/tanmaykumar1707/" target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-blue-500/30">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/tanmaykumar1707" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-600/20 hover:bg-gray-600/30 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-500/30">
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a passionate Backend Developer with over 4+ years of experience in building scalable microservices and robust applications. My journey has taken me through complex migration projects, from monolithic to microservices architecture, while working with cutting-edge technologies.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I have a strong foundation in algorithmic problem-solving and competitive programming, which helps me write efficient and optimized code. My experience spans across various domains including Investment and Insurance, where I've delivered high-quality solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 md:order-2">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-sm sm:text-base text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-sm sm:text-base text-gray-300">Technologies</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:scale-105 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">Gold</div>
                <div className="text-sm sm:text-base text-gray-300">Medal Honors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="group relative p-6 sm:p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <GraduationCap size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">Master of Computer Applications (MCA)</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-2">NIT Agartala</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      July 2018 - June 2021
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={16} />
                      9.22 CGPA (Gold Medal honors)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative p-6 sm:p-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600/20 rounded-full">
                  <GraduationCap size={20} className="sm:w-6 sm:h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-green-400">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-2">Patna College</p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      July 2014 - June 2017
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={16} />
                      79% (Top Rank Holder)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Deloitte Experience */}
            <div className="relative">
              <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="relative ml-12 sm:ml-16 p-6 sm:p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute -left-8 sm:-left-12 top-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full border-2 sm:border-4 border-slate-900"></div>
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">Consultant (Backend Developer)</h3>
                  <p className="text-lg sm:text-xl text-gray-300 mb-2">Deloitte USI, Bangalore</p>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                    <Calendar size={16} />
                    <span>July 2021 – Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400 mt-1">
                    <Briefcase size={16} />
                    <span>US Investment Domain</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Key Achievements</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Migration from Monolithic to Microservices Architecture</li>
                        <li>• RESTful and GraphQL API development</li>
                        <li>• Implemented fault tolerance patterns</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">Technologies</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Java 17, Spring Boot 3+</li>
                        <li>• AWS (EC2, ECS), Docker</li>
                        <li>• Prometheus, Grafana, Splunk</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TCS Experience */}
            <div className="relative">
              <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 to-green-500"></div>
              <div className="relative ml-12 sm:ml-16 p-6 sm:p-8 bg-gradient-to-r from-purple-900/30 to-green-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="absolute -left-8 sm:-left-12 top-8 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full border-2 sm:border-4 border-slate-900"></div>
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-400">Backend Developer</h3>
                  <p className="text-lg sm:text-xl text-gray-300 mb-2">Tata Consultancy Services, Bangalore</p>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                    <Calendar size={16} />
                    <span>July 2021 – Nov 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400 mt-1">
                    <Briefcase size={16} />
                    <span>Insurance Domain</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">Key Achievements</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Server migration & upgrade - 30% performance boost</li>
                        <li>• Scalable microservices development</li>
                        <li>• Process automation and internal tooling</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold text-green-400 mb-2">Technologies</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Spring Boot, Spring Cloud</li>
                        <li>• AWS, Linux, Docker</li>
                        <li>• ReactJS, WebSphere, Nginx</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Proficient</h3>
              <div className="space-y-4">
                {[
                  { name: 'Java & Spring Boot', level: 95 },
                  { name: 'AWS & Cloud Services', level: 90 },
                  { name: 'SQL & Databases', level: 88 },
                  { name: 'Linux & DevOps', level: 85 },
                  { name: 'DSA & Problem Solving', level: 92 }
                ].map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:scale-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Hands-on</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'ReactJS', 'Python', 'MongoDB', 'RabbitMQ', 
                  'Kubernetes', 'HTML/CSS', 'JavaScript', 'Docker'
                ].map((tech) => (
                  <div 
                    key={tech} 
                    className="p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 text-center"
                  >
                    <Code size={20} className="mx-auto mb-2 text-purple-400" />
                    <span className="text-gray-300 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Personal Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Task Assigner Project */}
            <div className="group p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">Task Assigner</h3>
                <div className="flex gap-2">
                  {/* <a href="https://github.com/tanmaykumar1707/taskassigner-backend" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-600/20 rounded-full hover:bg-gray-600/30 transition-colors">
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a> */}
                  <a href="https://task.tanmaykumar.org" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-colors">
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                Web application for Delegator-Executor task assignments with multi-role login system supporting Admin, Executor, and Delegator roles.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Multi-role authentication system</li>
                    <li>• Real-time task management</li>
                    <li>• Fault tolerance with Circuit Breaker</li>
                    <li>• Rate limiting implementation</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'JWT', 'RabbitMQ', 'MySQL', 'ReactJS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 rounded-full text-xs text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* NITIAN MCA Portal Project */}
            <div className="group p-6 sm:p-8 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">NITIAN MCA Portal</h3>
                {/* <a href="https://mca.tanmaykumar.org" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-600/20 rounded-full hover:bg-gray-600/30 transition-colors">
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a> */}
                <a href="https://mca.tanmaykumar.org" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-colors">
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  </a>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                Comprehensive networking portal designed for MCA students across all NITs, facilitating academic and professional connections.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Key Features</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Student networking platform</li>
                    <li>• Payment gateway integration</li>
                    <li>• Spam reporting system</li>
                    <li>• Cross-NIT collaboration</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'HTML', 'CSS', 'AJAX', 'MySQL', 'Payment Gateway'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-600/20 rounded-full text-xs text-green-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Responsibilities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
                <Award size={20} className="sm:w-6 sm:h-6" />
                Awards & Recognition
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
                  <h4 className="font-bold text-yellow-400 mb-2">Certificate of Appreciation</h4>
                  <p className="text-gray-300 text-sm mb-2">January 2023 & April 2024</p>
                  <p className="text-gray-400 text-sm">From Client & India Unit Head at TCS for outstanding performance and dedication</p>
                </div>

                <div className="p-4 sm:p-6 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
                  <h4 className="font-bold text-yellow-400 mb-2">Gold Medal Honors</h4>
                  <p className="text-gray-300 text-sm mb-2">MCA - NIT Agartala (2018-2021)</p>
                  <p className="text-gray-400 text-sm">Achieved 9.22 CGPA and received Gold Medal for academic excellence</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                <Briefcase size={20} className="sm:w-6 sm:h-6" />
                Leadership Roles
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h4 className="font-bold text-blue-400 mb-2">Placement Coordinator</h4>
                  <p className="text-gray-300 text-sm mb-2">NIT Agartala (2020-21)</p>
                  <p className="text-gray-400 text-sm">Led placement activities and coordinated with companies for campus recruitment</p>
                </div>

                <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <h4 className="font-bold text-purple-400 mb-2">Internship Coordinator</h4>
                  <p className="text-gray-300 text-sm mb-2">NIT Agartala (2019-20)</p>
                  <p className="text-gray-400 text-sm">Managed internship programs and facilitated industry-academia partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6">
              Always open to discussing new opportunities and innovative projects
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a href="mailto:tanmaykumar950@gmail.com" className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-500/30 text-sm sm:text-base">
                <Mail size={18} className="sm:w-5 sm:h-5" />
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/tanmaykumar1707/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-500/30 text-sm sm:text-base">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/tanmaykumar1707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-gray-600/20 hover:bg-gray-600/30 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-500/30 text-sm sm:text-base">
                <Github size={18} className="sm:w-5 sm:h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 pt-8">
            <p className="text-sm sm:text-base text-gray-400">
              &copy; 2025 Tanmay Kumar
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Social Bar */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 px-6 py-3 bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
          <a 
            href="https://www.linkedin.com/in/tanmaykumar1707/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-blue-600/20 hover:bg-blue-600/40 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} className="sm:w-5 sm:h-5 text-blue-400 group-hover:text-blue-300" />
          </a>
          <div className="w-px h-6 bg-slate-600"></div>
          <a 
            href="https://github.com/tanmaykumar1707" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-600/20 hover:bg-gray-600/40 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/30 group"
            title="GitHub Profile"
          >
            <Github size={18} className="sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;