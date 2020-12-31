import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Experience = ({ experience }) => {
  const { employer, job, start, end, desc, stack } = experience;

  const renderDescription = ({ list, content }) => {
    if (list) {
      return (
        <ul className="mb-2 font-semibold list-disc list-inside">
          {content.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      );
    } else {
      return <p className="mb-2 font-semibold">{content}</p>;
    }
  };

  return (
    <div className="flex items-center relative pb-5 lg:pb-10 last:pb-0">
      <div className="border-r-2 border-indigo-500 absolute left-3 top-1 -bottom-1">
        <FontAwesomeIcon icon={faCircle} className="-left-2 absolute text-indigo-500" />
      </div>

      <div className="ml-10">
        <h2 className="lg:text-lg xl:text-xl font-bold">
          {employer} - {job}
        </h2>
        <p className="text-xs lg:text-sm xl:text-lg italic mb-3 text-gray-500 font-semibold uppercase">
          {start} - {end}
        </p>
        <div className="text-xs lg:text-sm xl:text-lg">
          {renderDescription(desc)}
          <p className="italic text-gray-500 font-semibold mb-0">{stack}</p>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.shape({
    employer: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    desc: PropTypes.shape({
      list: PropTypes.bool.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
      ]).isRequired,
    }),
  }),
};

export default Experience;
