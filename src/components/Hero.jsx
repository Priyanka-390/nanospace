import React from 'react'
import NavBar from './NavBar'
import Para from './common/Para';
import { HERO_SOCIAL_ICONS_LIST } from '../utils/helper';

const Hero = () => {
  return (
    <div className="bg-hero lg:h-[810px] bg-no-repeat bg-cover lg:bg-full">
      <NavBar />
      <div className="max-lg:py-28 max-sm:py-24">
        <h1 className="leading-120 lg:mt-44 xl:text-custom-6xl lg:text-6xl md:text-5xl text-4xl pt-1.5 text-center md:mb-4 mb-3 font-orbitron font-bold text-white max-w-[801px] mx-auto">
          Save NANOSPACE World from Enemies
        </h1>
        <Para
          className="text-center lg:mb-11 md:mb-8 mb-4"
          title="Unleash ever - existing excitement with adorable girls armed with destructive gunfire."
        />
        <div className="flex md:gap-4 gap-2 justify-center items-center">
          {HERO_SOCIAL_ICONS_LIST.map((data, i) => (
            <a key={i} target="blank" href={data.url}>
              <img
                src={data.image}
                width={118}
                height={35}
                className="max-sm:w-24"
                alt="icons"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero
