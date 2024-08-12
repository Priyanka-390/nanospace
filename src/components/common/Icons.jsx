import React from 'react'

const Icons = ({ icon, className = "", ...props }) => {
  const iconsList = {
    "button-arrow": (
      <svg
        width="14"
        height="19"
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_36)">
          <path
            d="M7.3641 8.5L1 2.6664L2.81795 1L11 8.5L2.81795 16L1 14.3336L7.3641 8.5Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_36"
            x="0"
            y="0"
            width="14"
            height="19"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_36"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_36"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  };
  return icon && iconsList[icon];
};

export default Icons;
