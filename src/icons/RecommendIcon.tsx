import React from 'react';
import { colors } from '../tokens/colors'; // colors 경로 맞춰줘

interface RecommendIconProps {
  color?: string;
  size?: number;
}

const RecommendIcon: React.FC<RecommendIconProps> = ({ color = colors.category.Recommend_basic, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.66634 14.6666V7.33325M1.33301 8.66659V13.3333C1.33301 14.0696 1.92996 14.6666 2.66634 14.6666H11.6172C12.6043 14.6666 13.4438 13.9464 13.5939 12.9707L14.3119 8.30403C14.4982 7.09252 13.5609 5.99992 12.3351 5.99992H9.99967C9.63148 5.99992 9.33301 5.70144 9.33301 5.33325V2.97714C9.33301 2.06925 8.59701 1.33325 7.68912 1.33325C7.47257 1.33325 7.27633 1.46078 7.18838 1.65867L4.8423 6.93734C4.7353 7.1781 4.49655 7.33325 4.23309 7.33325H2.66634C1.92996 7.33325 1.33301 7.93021 1.33301 8.66659Z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RecommendIcon;
