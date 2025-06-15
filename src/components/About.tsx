import React from 'react';
import { Code, Database, Server, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React and modern CSS'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Java, and Python'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Designing efficient databases with MySQL and MongoDB'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development from concept to deployment'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I've successfully completed 5 comprehensive projects, each showcasing different aspects 
            of full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              As a full-stack enthusiast, I've dedicated myself to mastering both frontend and backend technologies. 
              My journey spans across multiple programming languages and frameworks, allowing me to build 
              comprehensive web solutions from database design to user interface implementation.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With 5 completed full-stack projects under my belt, I've gained hands-on experience in project 
              planning, development, testing, and deployment. I'm always eager to take on new challenges and 
              learn emerging technologies in the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;