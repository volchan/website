import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="h-52 bg-body flex flex-col justify-center px-20 font-medium text-center text-gray-700">
      <div>
        <a href="mailto:contact@s-dlt.fr" className=" hover:text-indigo-500 text-xl md:text-2xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/st%C3%A9phane-de-la-torre-b748a3144/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 hover:text-indigo-500 text-xl lg:text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/volchan"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 hover:text-indigo-500 text-xl lg:text-2xl"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
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
