import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contentRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, [inView]);

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase"] },
    { category: "Other", items: ["UI/UX Design", "RESTful APIs", "GraphQL", "Testing"] }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-blue-900/90"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill}
                      progress={70 + Math.random() * 15}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, progress }: { skill: string; progress: number }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-300 mb-1">
      <span>{skill}</span>
      <span>{Math.round(progress)}%</span>
    </div>
    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default Skills;