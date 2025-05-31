export default function Skills() {
  // Skills data organized by category
  const skillsData = {
    frontend: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 65 },
    ],
    tools: [
      { name: 'Git', level: 80 },
      { name: 'Docker', level: 60 },
      { name: 'AWS', level: 55 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 90 },
    ],
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's an overview of my technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
          <SkillCategory title="Backend Development" skills={skillsData.backend} />
          <SkillCategory title="Tools & Technologies" skills={skillsData.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}