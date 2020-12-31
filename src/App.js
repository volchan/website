import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

import { Provider as ExpProvider } from './context/experienceContext';

const App = () => {
  return (
    <div className="antialiased text-gray-900 bg-body min-h-screen">
      <Navbar />
      <Header />
      <About />
      <ExpProvider>
        <Experiences />
      </ExpProvider>
      <Footer />
    </div>
  );
};

export default App;
