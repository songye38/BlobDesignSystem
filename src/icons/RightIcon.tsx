import React from 'react';
import { colors } from '../tokens/colors'; // colors 경로 맞게 수정

interface RightIconProps {
  color?: string;
  size?: number;
}

const RightIcon: React.FC<RightIconProps> = ({ color = colors.grayscale[1300], size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RightIcon;
