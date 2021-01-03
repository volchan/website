import React, { useContext, useState, useEffect } from 'react';

import { Context as TabContext } from '../context/TabContext';
import Tabs from './Tabs';
import { debounce } from '../utlities';

const Navbar = () => {
  const { state: { activeTab } } = useContext(TabContext);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [backgroundClasses, setBackgroundClasses] = useState('');

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = ((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 70);
    const isHome = activeTab === 'home'

    console.log(activeTab);
    
    setVisible(isVisible || !isHome);

    if (isHome) setBackgroundClasses('');
    if (!isHome) setBackgroundClasses('bg-body shadow-sm');

    setPrevScrollPos(currentScrollPos);
  });

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`
        fixed px-8 pt-2 pb-4 z-10 w-screen transition-opacity duration-200 ease-in-out
        ${ visible ? 'opacity-100' : 'opacity-0' }
        ${backgroundClasses}
      `}
    >
      <div className="flex justify-center">
        <Tabs />
      </div>
    </nav>
  );
};

export default Navbar;
