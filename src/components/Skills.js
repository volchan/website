import React, { useContext } from 'react';

import Skill from './Skill';
import { Context as SkillContext } from '../context/skillContext';

const Skills = () => {
  const { state } = useContext(SkillContext);

  return (
    <div className="text-gray-200 py-24 mx-auto w-3/4 md:w-1/2 xl:w-2/4 2xl:w-2/5" id="skills">
      {state.map(skill => <Skill skill={skill} key={skill.name} />)}
    </div>
  );
};

export default Skills;
