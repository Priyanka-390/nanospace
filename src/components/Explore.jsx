import explore from "../assets/images/webp/explore.webp"
import exploreLogo from "../assets/images/svg/explore-logo.svg"
import Para from "./common/Para";
import { EXPLORE_DATA_LISTS } from "../utils/helper";

const Explore = () => {
  return (
    <div className="bg-light-black overflow-hidden h-[826px] relative">
      <div className="absolute top-0 left-0">
        <img src={explore} alt="explore" width={880} />
      </div>
      <div className="container max-w-[1140px] mx-auto">
        <div className="flex justify-end pt-44">
          <div className="bg-white w-[672px] h-[462px] bg-opacity-[4%] backdrop-blur-[10px] p-12">
            <img src={exploreLogo} alt="logo" />
            <h2 className="text-white leading-120 mt-6 text-custom-4xl font-orbitron font-bold ">
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
                    className="max-w-[483px] font-normal text-base text-light-white leading-150"
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
  );
}

export default Explore
