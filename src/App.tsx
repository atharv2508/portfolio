import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 min-h-screen text-white overflow-x-hidden">
      <div className="relative">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 -z-10"></div>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;