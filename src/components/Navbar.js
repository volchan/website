import React, { useState, useEffect } from 'react';

import { Provider as TabProvider} from '../context/TabContext';
import Tabs from './Tabs';
import { debounce } from '../utlities';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 70);

    setPrevScrollPos(currentScrollPos);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <TabProvider>
      <nav className={`fixed px-8 pt-2 z-10 w-screen transition-opacity duration-200 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-center">
          <Tabs />
        </div>
      </nav>
    </TabProvider>
  );
};

export default Navbar;
