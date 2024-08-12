import explore from "../assets/images/webp/explore.webp"
import exploreEllipse from "../assets/images/svg/explore-ellipse.svg"
import exploreVector from "../assets/images/svg/explore-vector.svg"
import exploreLogo from "../assets/images/svg/explore-logo.svg"
import Para from "./common/Para";
import { EXPLORE_DATA_LISTS } from "../utils/helper";

const Explore = () => {
  return (
    <div className="bg-light-black 2xl:max-w-[1920px] 2xl:mx-auto overflow-y-clip lg:h-[826px] relative">
      <div className="absolute lg:block hidden top-0  left-0">
        <div className="relative">
          <div className="w-[333px] h-[305px] blur-[230px] absolute bg-light-blue top-[20%] left-0 -z-10"></div>
          <img
            src={explore}
            alt="explore"
            className="max-xl:w-[600px]"
            width={880}
          />
        </div>
      </div>
      <div className="container  z-10 max-w-[1140px] mx-auto">
        <div className="max-lg:grid lg:grid-cols-2">
          <div className="md:col-span-1  lg:hidden flex justify-center">
            <div className="lg:hidden block">
              <div className="relative">
                <div className="lg:w-[333px] size-44 lg:h-[305px] blur-[230px] absolute bg-light-blue top-[40%] left-0 -z-10"></div>
                <img
                  src={explore}
                  alt="explore"
                  className="max-xl:w-[600px]"
                  width={880}
                />
              </div>
            </div>
          </div>
          <div className="flex md:col-span-1 lg:justify-end justify-center relative lg:pt-44 sm:pt-10 pt-5 md:pt-20">
            <img
              src={exploreVector}
              alt="vector"
              className="absolute lg:top-[7%] z-10 md:block hidden top-[-2%] right-[-2%] lg:right-[-7%]"
            />
            <div className="bg-white xl:w-[672px] xl:h-[462px] bg-opacity-[4%] backdrop-blur-[10px] xl:p-12 p-9">
              <img src={exploreLogo} alt="logo" />
              <h2 className="text-white leading-120 mt-6 xl:text-custom-4xl md:text-4xl sm:text-3xl text-2xl font-orbitron font-bold">
                Explore NANOSPACE
              </h2>
              <Para
                className="mt-4"
                title="Find best in class heart-pounding idle RPG experience"
              />
              <Para
                className="font-semibold text-light-white mt-2.5"
                title="Adorable, Collectible Anime-Inspired Character"
              />
              <div>
                {EXPLORE_DATA_LISTS.map((data, i) => (
                  <div className="flex gap-2.5 mt-3.5">
                    <div className="bg-dark-grey mt-1.5 size-4 p-[2.5px] rounded-full">
                      {" "}
                      <div className="size-[11px] rounded-full bg-light-white"></div>
                    </div>
                    <p
                      key={i}
                      className="lg:max-w-[483px] font-normal md:text-base text-sm text-light-white leading-150"
                    >
                      {data}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore
