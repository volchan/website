import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="antialiased text-gray-900 bg-body min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default App;
