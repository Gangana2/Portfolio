import React, { useState, useEffect } from 'react';
import { ChevronDown, Facebook, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = 'Gangana Fernando';
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < fullName.length) {
          setDisplayText(fullName.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(fullName.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullName]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative">
              <img
                src="https://github.com/Gangana2/Portfolio/blob/main/src/components/Images/WhatsApp Image 2025-06-14 at 21.12.19_e0bf65e1.jpg?raw=true"
                alt="Gangana Fernando - Full Stack Developer"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce delay-100"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce delay-300"></div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block lg:inline">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full-Stack Developer passionate about creating exceptional web experiences with modern technologies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                View My Work
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
               <a
                  href="https://web.facebook.com/profile.php?id=61577113827677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              <a
                href="mailto:gangana@example.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
