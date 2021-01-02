import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import HeaderBackground from '../assets/images/header_background.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header
      className="relative flex flex-col items-center justify-center h-screen w-full bg-cover bg-center text-gray-100 text-shadow-header"
      style={{ backgroundImage: `url(${HeaderBackground})` }}
      id="home"
    >
      <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Stéphane DE LA TORRE
      </h1>
      <p className="mt-7 text-gray-500 font-semibold px-4 text-center text-xs lg:text-sm xl:text-lg">
        Développeur Fullstack Ruby on Rails basé à Bordeaux le jour,
        <br className="block md:hidden" /> passionné touche à tout la nuit.
      </p>
      
      <Socials classes="mt-7" />

      <FontAwesomeIcon
        icon={faChevronDown}
        className="text-xl absolute bottom-16 sm:bottom-10 mx-auto motion-safe:animate-bounce"
      />
    </header>
  );
}

export default Header;
