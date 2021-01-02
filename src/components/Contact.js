import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="text-gray-200 py-24 mx-auto w-3/4 md:w-1/2 2xl:w-2/5 text-sm md:text-base lg:text-lg xl:text-xl" id="contact">
      <p className="w-full font-semibold">
        <FontAwesomeIcon icon={faEnvelope} />&nbsp;
        Email :&nbsp;
        <a href="mailto:contact@s-dlt.fr" className="text-indigo-500 hover:text-indigo-600">
          contact@s-dlt.fr
        </a>
      </p>
      <p className="w-full font-semibold">
        <FontAwesomeIcon icon={faLinkedinIn} />&nbsp;
        LinkedIn :&nbsp;
        <a
          href="https://www.linkedin.com/in/st%C3%A9phane-de-la-torre-b748a3144/"
          className="text-indigo-500 hover:text-indigo-600 visited:text-indigo-800"
          target="_blank noreferrer"
          rel="noopener noreferrer"
        >
          Stéphane DE LA TORRE
        </a>
      </p>
      <p className="w-full font-semibold">
        <FontAwesomeIcon icon={faGithub} />&nbsp;
        Github :&nbsp;
        <a
          href="https://www.github.com/volchan"
          className="text-indigo-500 hover:text-indigo-600 visited:text-indigo-800"
          target="_blank noreferrer"
          rel="noopener noreferrer"
        >
          https://www.github.com/volchan
        </a>
      </p>
    </div>
  );
};

export default Contact;
