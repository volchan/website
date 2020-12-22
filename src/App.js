import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="antialiased text-gray-900 bg-gray-200 min-h-screen">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
