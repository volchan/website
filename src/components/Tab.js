import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Context as TabContext } from '../context/TabContext';

const Tab = ({ label, hashLink }) => {
  const [classes, setClasses] = useState('text-indigo-200 opacity-30');
  const { state: { activeTab }, changeTab } = useContext(TabContext);

  useEffect(() => {
    if (activeTab === hashLink) return setClasses('text-indigo-500 border-indigo-500');
    return setClasses('text-indigo-200 opacity-30');
  }, [activeTab]);

  const handleClick = (event) => {
    changeTab(event.target.hash);
  }

  return (
    <a
      className={`no-underline border-b-2 ${classes} border-transparent hover:text-indigo-500 hover:border-indigo-500 hover:opacity-100 uppercase tracking-wide font-extrabold text-xs pt-3 pb-1 ml-8`}
      href={hashLink}
      onClick={handleClick}
      key={label}
    >
      {label}
    </a>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  hashLink: PropTypes.string.isRequired,
};

export default Tab;
