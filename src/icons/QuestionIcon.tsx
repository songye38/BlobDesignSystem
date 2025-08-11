import React from 'react';
import { colors } from '../tokens/colors'; // colors 경로 맞게 조절

interface QuestionIconProps {
  color?: string;
  size?: number;
}

const QuestionIcon: React.FC<QuestionIconProps> = ({ color = colors.category.Question_basic, size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8.0001H8.00667M10.357 10.3571C7.23283 13.4813 3.6449 14.9587 2.34315 13.6569C1.0414 12.3552 2.51878 8.76727 5.64298 5.64307C8.76717 2.51888 12.3551 1.04149 13.6569 2.34324C14.9586 3.64499 13.4812 7.23292 10.357 10.3571ZM10.357 5.64295C13.4812 8.76715 14.9586 12.3551 13.6568 13.6568C12.3551 14.9586 8.76715 13.4812 5.64295 10.357C2.51876 7.2328 1.04137 3.64487 2.34312 2.34312C3.64487 1.04137 7.2328 2.51876 10.357 5.64295ZM8.33334 8.0001C8.33334 8.18419 8.1841 8.33343 8 8.33343C7.81591 8.33343 7.66667 8.18419 7.66667 8.0001C7.66667 7.816 7.81591 7.66676 8 7.66676C8.1841 7.66676 8.33334 7.816 8.33334 8.0001Z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default QuestionIcon;
