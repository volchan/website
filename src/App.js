import React from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="antialiased text-gray-900 bg-gray-200 min-h-screen">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
