import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Socials from './Socials';

const Footer = () => {
  return (
    <div className="h-52 bg-body flex flex-col justify-center px-20 font-medium text-center text-gray-700">
      <Socials />
      <div className="mt-2 md:flex md:items-center md:justify-center">
        <p className="m-0 tracking-tight">
          Dévelopé avec <FontAwesomeIcon icon={faHeart} className="text-indigo-500" /> en&nbsp;
          <FontAwesomeIcon icon={faReact} className="text-blue-500" /> par
        </p>
        <a
          href="https://www.github.com/volchan"
          target="_blank noreferrer"
          rel="noopener noreferrer"
          className="md:ml-1 text-indigo-500 hover:text-indigo-600"
        >
          Stéphane DE LA TORRE
        </a>
      </div>
    </div>
  );
};

export default Footer;
