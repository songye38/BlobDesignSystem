import React from 'react';
import { colors } from '../tokens/colors'; // colors 경로 맞게 수정

interface CloseIconProps {
  color?: string;
  size?: number;
}

const CloseIcon: React.FC<CloseIconProps> = ({ color = colors.grayscale[100], size = 12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 3.5L3.5 8.5M3.5 3.5L8.5 8.5"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
