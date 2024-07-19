import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt, FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="flex justify-center lg:justify-start relative z-10 font-light">
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className='text-left font-bold md:text-center text-[35px] md:text-5xl'>
          Daniela Fajardo 
        </h1>

        <p className='text-left md:text-center md:tracking-wider text-lg lg:text-2xl'>
          Software Engineer
        </p>

        <p className="text-md text-white-200 max-w-80">
          I code websites, build apps, and play with loads of data.
        </p>

        <a href="/resume.pdf" target='_blank'>
          <MagicButton
            title="Curious? View Resume"
            icon={<FaExternalLinkAlt />}
            position="right"
          />
        </a>
      </div>
    </div>
  )
}

export default Hero
