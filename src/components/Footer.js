import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="h-96 bg-gray-900 flex items-center px-20 font-medium">
      <p className="m-0 text-gray-500 tracking-tight">
        Dévellopé avec <FontAwesomeIcon icon={faHeart} className="text-indigo-500" /> par
      </p>
      &nbsp;
      <a
        href="https://www.github.com/volchan"
        target="_blank noreferrer"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:text-indigo-600"
      >
        Stéphane DE LA TORRE
      </a>
    </div>
  );
};

export default Footer;
