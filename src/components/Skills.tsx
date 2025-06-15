import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 78 }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proficient in a wide range of technologies for full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'MySQL', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;