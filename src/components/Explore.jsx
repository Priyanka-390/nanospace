import explore from "../assets/images/webp/explore.webp"
import exploreVector from "../assets/images/svg/explore-vector.svg"
import exploreLogo from "../assets/images/svg/explore-logo.svg"
import Para from "./common/Para";
import { EXPLORE_DATA_LIST} from "../utils/helper";

const Explore = () => {
  return (
    <div id="about" className="bg-light-black 2xl:max-w-[1920px] z-0 2xl:mx-auto overflow-hidden lg:h-[826px] relative">
      <div className="bg-explore-gradient md:h-[130px] xl:h-[230px] sm:h-36 h-20 w-full absolute z-20 -mt-1"></div>
      <div className="absolute lg:block hidden top-0 left-0">
        <div className="relative">
          <div className="w-[160px] h-[695px] blur-[190px] pointer-events-none absolute bg-light-sky top-[10%] left-[20%] -z-10"></div>
          <img
            src={explore}
            alt="explore"
            className="max-xl:w-[600px]"
            width={880}
          />
        </div>
      </div>
      <div className="container z-10 max-w-[1140px] mx-auto">
        <div className="max-lg:grid lg:grid-cols-2">
          <div className="md:col-span-1 lg:hidden flex justify-center">
            <div className="lg:hidden block">
              <div className="relative">
                <div className="lg:w-[333px] pointer-events-none size-44 lg:h-[305px] blur-[230px] absolute bg-light-blue top-[40%] left-0 -z-10"></div>
                <img
                  src={explore}
                  alt="explore"
                  className="max-xl:w-[600px]"
                  width={880}
                />
              </div>
            </div>
          </div>
          <div className="flex md:col-span-1 lg:justify-end justify-center relative lg:pt-44 max-sm:-translate-y-24 max-lg:-translate-y-32">
            <img
              src={exploreVector}
              alt="vector"
              className="absolute pointer-events-none lg:top-[7%] z-10 md:block lg:-right-[2%] hidden top-[-37%] right-[2%] xl:right-[-7%]"
            />
            <div className="bg-white xl:w-[672px] rounded-[10px] xl:h-[462px] bg-opacity-[4%] backdrop-blur-[10px] xl:p-12 sm:p-6 p-4 md:p-9">
              <div className="relative">
                <img
                  src={exploreLogo}
                  className="max-sm:w-[180px]"
                  alt="logo"
                />
                <div className="w-[156px] pointer-events-none absolute top-1/2 right-1/2 -translate-x-1/2 bg-light-white blur-[80px] h-[54px]"></div>
              </div>
              <h2 className="text-white leading-120 md:mt-6 mt-3 xl:text-custom-4xl md:text-4xl sm:text-3xl text-2xl font-orbitron font-bold">
                Explore NANOSPACE
              </h2>
              <Para
                className="md:mt-4 mt-2"
                title="Find best in class heart-pounding idle RPG experience"
              />
              <Para
                className="font-semibold text-light-white mt-2.5"
                title="Adorable, Collectible Anime-Inspired Character"
              />
              <div>
                {EXPLORE_DATA_LIST.map((data, i) => (
                  <div className="flex gap-2.5 md:mt-3.5 mt-2">
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
