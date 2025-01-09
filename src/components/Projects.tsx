import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["React", "D3.js", "Express", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-purple-900/90"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden group">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors duration-200"
          >
            <ExternalLink size={24} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-white/20 rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;