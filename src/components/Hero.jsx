import React from 'react'
import NavBar from './NavBar'
import Para from './common/Para';
import { HERO_SOCIAL_ICONS_LIST } from '../utils/helper';

const Hero = () => {
  return (
    <div className="bg-hero relative bg-center lg:h-[810px] h-[700px] z-10 bg-no-repeat bg-cover ">
      {/* <div className='absolute bottom-0'>
        <video autoPlay muted playsInline loop id='myvedio'>
          {" "}
          <source
            src="https://t3475808.p.clickup-attachments.com/t3475808/2e6ec7ca-e88c-4b27-ab6a-5eac2e8ccfb3/1920X886%20Banner.mp4?open=true"
            type="video/mp4"
          ></source>
        </video>
      </div> */}

      <div className="bg-hero-gradient absolute z-20 bottom-[-10%] left-0 right-0"></div>
      <NavBar />
      <div className="max-lg:py-48">
        <h1 className="!leading-120 lg:mt-44 xl:text-custom-6xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl pt-1.5 text-center md:mb-4 mb-3 font-orbitron font-bold text-white max-w-[801px] mx-auto">
          Save NANOSPACE World from Enemies
        </h1>
        <Para
          className="lg:mb-11 text-center md:mb-8 mb-4"
          title="Unleash ever - existing excitement with adorable girls armed with destructive gunfire."
        />
        <div className="flex md:gap-4 gap-2 justify-center items-center">
          {HERO_SOCIAL_ICONS_LIST.map((data, i) => (
            <a key={i} target="blank" href={data.url}>
              <img
                src={data.image}
                width={118}
                height={35}
                className="max-sm:w-24 hover:scale-110 duration-300"
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
