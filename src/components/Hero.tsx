import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' } 
    );

    gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 } 
    );
    
    gsap.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },  
      { y: 0, opacity: 1, duration: 1.4, ease: 'power4.out', delay: 0.4 } 
    );
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/98 via-blue-950/98 to-purple-950/98"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8"
        >
          <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Hi, I'm</span>{' '}
          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Atharv Bandewar
          </span>
        </h1>
        
        <p 
          ref={textRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
        >
          A passionate full-stack developer crafting beautiful and functional web experiences
        </p>
        
        <div className="flex flex-col items-center">
          <a
            href="https://drive.google.com/file/d/1vMl83OVeIohJ8KW6QHZxgGQdlchTgfe1/view?usp=drive_link"
            target="_blank"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 mb-12 transform hover:scale-105 shadow-[0_4px_14px_0_rgba(0,0,0,0.3)] hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.4)] text-lg"
          >
            View My Resume
          </a>
          
          <ArrowDown className="text-white animate-bounce drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
