import React from 'react';
import { colors } from '../tokens/colors'; // colors 경로 맞게 조절

interface HelpIconProps {
  color?: string;
  size?: number;
}

const HelpIcon: React.FC<HelpIconProps> = ({ color = colors.category.Help_basic, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2.66659V1.33325M10 10.6666V9.33325M5.33333 5.99992H6.66667M13.3333 5.99992H14.6667M11.8667 7.86659L12.6667 8.66659M11.8667 4.13325L12.6667 3.33325M2 13.9999L8 7.99992M8.13333 4.13325L7.33333 3.33325"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HelpIcon;
