import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Socials = ({classes}) => {
  return (
    <div className={classes}>
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
  );
}

Socials.propTypes = {
  classes: PropTypes.string,
}

export default Socials
