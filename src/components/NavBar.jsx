import { useState } from "react";
import navLogo from "../assets/images/webp/nav-logo.webp"
import { NAV_LINK_LIST } from "../utils/helper";
import PrimaryButton from "./common/PrimaryButton";

const NavBar = () => {
    const [show, setShow] = useState(true);
     function showNav() {
       setShow(!show);
       if (show === true) {
         document.body.classList.add("max-lg:!overflow-hidden");
       } else {
         document.body.classList.remove("max-lg:!overflow-hidden");
       }
     }
  return (
    <div className="shadow-nav relative z-50 bg-white bg-opacity-[6%] backdrop-blur-[20px] md:py-4 py-3">
      <div className="max-w-[1280px] conatiner mx-auto xl:px-0 px-4">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={navLogo} width={154} className="max-sm:w-28" height={48} alt="logo" />
          </a>
          <ul
            className={`flex  max-lg:gap-4 items-center mobileView ${
              show ? "right-[100%] " : "right-0 max-lg:min-h-screen"
            }`}
          >
            {NAV_LINK_LIST.map((data, i) => (
              <li key={i}>
                <a onClick={showNav}
                  href={data.url}
                  className="font-saira px-4 py-7 after:bg-light-grey max-lg:after:hidden after:top-0 after:bottom-[200%] hover:after:bottom-0 after:w-full after:right-0 after:left-0 z-10 after:-z-10 after:duration-300 after:absolute relative duration-300 font-normal text-base text-white leading-157"
                >
                  {data.title}
                </a>
              </li>
            ))}
            <li onClick={showNav}>
              <PrimaryButton
                className="max-sm:flex hidden"
                children="Find More"
              />
            </li>
          </ul>
          <div className="flex gap-6 items-center">
            <PrimaryButton onClick={showNav}
              className="max-sm:hidden block"
              children="Find More"
            />
            <label className="lg:hidden" onClick={showNav}>
              {show ? (
                <div className="z-30 relative">
                  <span className="flex bg-white h-1 rounded-3xl duration-300 w-6"></span>
                  <span className="flex bg-white h-1 rounded-3xl duration-300 w-6 mt-1"></span>
                  <span className="flex bg-white h-1 rounded-3xl duration-300 w-6 mt-1"></span>
                </div>
              ) : (
                <div className="z-20 relative">
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar
