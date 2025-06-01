import Image from 'next/image';

export default function About() {
  // Experience data
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      period: '2021 - Present',
      description: 'Led the development of responsive web applications using React and Next.js. Improved site performance by 40% through code optimization and modern frontend practices.',
    },
    {
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2018 - 2021',
      description: 'Developed and maintained full-stack applications using MERN stack. Collaborated with design team to implement UI/UX improvements and ensure responsive design across all devices.',
    },
    {
      company: 'WebCraft Agency',
      position: 'Junior Web Developer',
      period: '2016 - 2018',
      description: 'Built and maintained client websites using HTML, CSS, and JavaScript. Assisted in the development of custom WordPress themes and plugins.',
    },
  ];

  // Education data
  const education = [
    {
      institution: 'University of Technology',
      degree: 'Master of Computer Science',
      period: '2014 - 2016',
      description: 'Specialized in Web Technologies and User Interface Design. Graduated with honors.',
    },
    {
      institution: 'State University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2010 - 2014',
      description: 'Focused on Software Development and Database Management. Participated in multiple hackathons and coding competitions.',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl max-w-md mx-auto">
              {/* Replace with your about image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
                {/* Uncomment and use your own image
                <Image 
                  src="/about-image.jpg" 
                  alt="About Me" 
                  fill 
                  className="object-cover"
                />
                */}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
              <p className="font-mono text-sm">Passionate about clean code</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm a Full Stack Developer with over 5 years of experience in building web applications. 
              I specialize in JavaScript technologies across the whole stack (React, Node.js, Express, MongoDB).
              I have a passion for building user-friendly, accessible, and performant web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me hiking in the mountains, reading tech blogs, or experimenting with new technologies.
              I believe in continuous learning and staying updated with the latest trends in web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Soumya Mishra</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">soumyamishra2099@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400">Nagpur, Maharashtra, India</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-400">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-bold">{exp.position}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-accent/30 pb-8">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Personal Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-2xl">🏔️</span>
              </div>
              <h4 className="font-bold">Hiking</h4>
            </div>
            <div className="p-4">
              <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-bold">Reading</h4>
            </div>
            <div className="p-4">
              <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-2xl">✈️</span>
              </div>
              <h4 className="font-bold">Traveling</h4>
            </div>
            <div className="p-4">
              <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-2xl">🎮</span>
              </div>
              <h4 className="font-bold">Gaming</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}