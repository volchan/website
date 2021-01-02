import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({skill}) => {
  const { name, percentage, color } = skill;

  return (
    <div className="mb-4 md:mb-5 last:mb-0">
      <div className="flex justify-between text-xs lg:text-base md:text-sm font-semibold mb-1">
        <p className="m0">{name}</p>
        <p className="m0">{percentage}%</p>
      </div>
      <div className="flex-1 h-2 rounded overflow-hidden border border-opacity-10 bg-opacity-10 border-indigo-600 bg-indigo-900">
        <div className="h-full rounded bg-indigo-800" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }),
}

export default Skill;
