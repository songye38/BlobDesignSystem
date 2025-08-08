import { iconSizes, colors } from '../tokens';
import  { ReactComponent as CurrentLocationSVG } from '../assets/icons/current-location.svg';

interface CurrentLocationProps {
  size?: number;
  color?: string;
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({
  size = iconSizes.xs,
  color = colors.grayscale[700],  // 기본 색상 토큰에서 가져오기
}) => (
  <CurrentLocationSVG
    width={size}
    height={size}
    fill={color}  // fill 속성에 컬러 넣기
  />
);

export default CurrentLocation;
