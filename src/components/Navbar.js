import React from 'react';

import { Provider as TabProvider} from '../context/TabContext';
import Tabs from './Tabs';

const Navbar = () => {
  return (
    <TabProvider>
      <nav className="fixed px-8 pt-2 z-10 w-screen">
        <div className="flex justify-center">
          <Tabs />
        </div>
      </nav>
    </TabProvider>
  );
};

export default Navbar;
