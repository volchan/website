import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const Tab = ({ label, hashLink }) => {
  return (
    <Link
      className={`no-underline border-b-2 text-indigo-200 opacity-30 border-transparent hover:text-indigo-500 hover:border-indigo-500 hover:opacity-100 uppercase tracking-wide font-extrabold text-xs pt-3 pb-1 ml-8`}
      activeClass="text-indigo-500 border-indigo-500 opacity-100"
      to={hashLink}
      spy={true}
      smooth={true}
      key={label}
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
