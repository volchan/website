import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import { Context as TabContext } from '../context/TabContext';

const Tab = ({ label, hashLink }) => {
  const { changeTab } = useContext(TabContext);

  const handleSetActive = (activeTab) => {
    changeTab(activeTab);
  };

  return (
    <Link
      className={`no-underline border-b-2 text-indigo-200 opacity-30 border-transparent hover:text-indigo-500 hover:border-indigo-500 hover:opacity-100 uppercase tracking-wide font-extrabold text-xs pt-3 pb-1 ml-8 cursor-pointer`}
      activeClass="text-indigo-500 border-indigo-500 opacity-100"
      to={hashLink}
      spy={true}
      smooth={true}
      key={label}
      onSetActive={handleSetActive}
    >
      {label}
    </Link>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  hashLink: PropTypes.string.isRequired,
};

export default Tab;
