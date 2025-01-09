import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Code2, Palette, Globe2 } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-purple-900/90"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src='/assets/personal-image.png'
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate developer with expertise in building modern web applications. 
                With a strong foundation in both front-end and back-end development, I create 
                seamless digital experiences that solve real-world problems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <FeatureCard
                  icon={<Code2 className="text-purple-400" size={32} />}
                  title="Development"
                  description="Clean, modern and maintainable code"
                />
                <FeatureCard
                  icon={<Palette className="text-blue-400" size={32} />}
                  title="Design"
                  description="Beautiful and intuitive interfaces"
                />
                <FeatureCard
                  icon={<Globe2 className="text-purple-400" size={32} />}
                  title="Deployment"
                  description="Efficient and scalable solutions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
    <div className="mb-4">{icon}</div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default About;