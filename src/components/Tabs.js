import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Context as TabContext } from '../context/TabContext';
import Tab from './Tab';

const Tabs = () => {
  const { state: { tabs }, changeTab } = useContext(TabContext);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    changeTab(hash);
  }, [hash])

  return (
    <>
      {tabs.map(({ label, hashLink }) => <Tab key={label} label={label} hashLink={hashLink} />)}
    </>
  );
};

export default Tabs;
