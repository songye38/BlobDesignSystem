import { iconSizes, colors } from '../tokens';
import  { ReactComponent as LoadingSVG } from '../assets/icons/loading.svg';

interface LoadingProps {
  size?: number;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = iconSizes.xs,
  color = colors.grayscale[700],  // 기본 색상 토큰에서 가져오기
}) => (
  <LoadingSVG
    width={size}
    height={size}
    fill={color}  // fill 속성에 컬러 넣기
  />
);

export default Loading;
