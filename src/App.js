import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Footer from './components/Footer';

import { Provider as TabProvider } from './context/TabContext';
import { Provider as ExpProvider } from './context/experienceContext';
import { Provider as SkillProvider } from './context/skillContext';

const App = () => {
  return (
    <div className="antialiased text-gray-900 bg-body min-h-screen">
      <TabProvider>
        <Navbar />
      </TabProvider>
      <Header />
      <About />
      <ExpProvider>
        <Experiences />
      </ExpProvider>
      <SkillProvider>
        <Skills />
      </SkillProvider>
      <Footer />
    </div>
  );
};

export default App;
