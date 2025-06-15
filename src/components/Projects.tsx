import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Job-Finder Platform',
      gitLink: 'https://github.com/Gangana2/Job_Finder',
      description: 'Job-Finder Platform is a modern web application built with React, Node.js, and TypeScript. It connects job seekers with employers, offering features like job listings, user authentication, and real-time search. The platform ensures a smooth user experience with a responsive design and secure backend services.',
      tech: ['React', 'Node.js', 'TypeScript'],
      image: 'src/components/Images/jobFiinder.png'
    },
    {
      title: 'Task Management System',
      gitLink: 'https://github.com/Gangana2/Task-Manager-main',
      description: 'Task Management System is a full-stack web application developed using React, Node.js, MySQL, and Socket.io. It allows users to create, assign, and track tasks in real time. With live updates via WebSockets, the platform supports seamless team collaboration and efficient workflow management.',
      tech: ['React', 'MySQL', 'Node.js', 'Socket.io'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Weather Analytics App',
      gitLink: 'https://github.com/Gangana2/Weather_App',
      description: 'Data visualization app using Python for backend processing and React for the frontend. Integrates multiple weather APIs and provides comprehensive analytics.',
      tech: ['JavaScript', 'CSS', 'HTML'],
      image: 'src/components/Images/weather.jpg'
    },
    {
      title: 'Calculator App',
      gitLink: 'https://github.com/Gangana2/Calculator',
      description: 'Calculator App is a basic web application built using HTML, CSS, and JavaScript. It performs standard arithmetic operations like addition, subtraction, multiplication, and division with a clean and responsive user interface.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      image: 'src/components/Images/calculator.jpg'
    },
    {
      title: 'Conference Management System',
      gitLink: 'https://github.com/Gangana2/conference_management_system',
      description: 'Conference Management System is a web-based application developed using HTML, CSS, JavaScript, and PHP. It allows users to register for conferences, manage schedules, and handle speaker information. The system also provides admin functionalities to organize events and monitor participant data efficiently.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      image: 'src/components/Images/conference.webp'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are 5 comprehensive full-stack projects I've successfully completed, showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                      <ExternalLink size={20} />
                    </button>
                    <button onClick={() => window.open(project.gitLink, '_blank')} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
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

export default Projects;