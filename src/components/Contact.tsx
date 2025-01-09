import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [messages,setMessages] = useState({
    name: '',
    email: '',
    messages:''
  })
 
  const handleForm = async(e:React.FormEvent) =>{
    e?.preventDefault();
    console.log(messages)
    setMessages({
      name: '',
      email: '',
      messages:''
    })
  }

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
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-blue-900/90"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  content="atharv.bandewar22@pccoepune.org"
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  content="+91 94046 45988"
                />
                <ContactInfo
                  icon={<MapPin />}
                  title="Location"
                  content="Pune, Maharastra, India"
                />
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <form className="space-y-6" onSubmit={handleForm}>
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={messages.name}
                    id="name"
                    onChange={(e)=>{
                      setMessages((prev)=>({...prev,name: e.target.value}))
                    }}
                    className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    value={messages.email}
                    type="email"
                    id="email"
                    onChange={(e)=>{
                      setMessages((prev)=>({...prev,email:e.target.value}))
                    }}
                    className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    value={messages.messages}
                    onChange={(e)=>{
                      setMessages((prev)=>({...prev,messages:e.target.value}))
                    }}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="text-purple-400">{icon}</div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-gray-300">{content}</p>
    </div>
  </div>
);

export default Contact;