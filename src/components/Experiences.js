import React, { useContext } from 'react';

import { Context as ExpContext } from '../context/experienceContext';
import Experience from './Experience';

const Experiences = () => {
  const { state } = useContext(ExpContext);

  return (
    <section className="text-gray-200 mt-1 md:mt-0 py-24 mx-auto w-3/4 lg:w-2/3 2xl:w-3/6" id="experience">
      {state.map((experience) => (
        <Experience experience={experience} key={experience.employer} />
      ))}
    </section>
  );
};

export default Experiences;
