import { iconSizes } from '../tokens';
import { ReactComponent as BlobHeartSVG } from '../assets/icons/check-heart.svg';

interface BlobHeartProps {
  size?: number;
  color?: string; // color를 쓸 거면 밑에 style이나 fill 속성 추가해야 해
}

const BlobHeart: React.FC<BlobHeartProps> = ({
  size = iconSizes.xs,
  color,
}) => (
  <BlobHeartSVG
    width={size}
    height={size}
    {...(color ? { fill: color } : {})} // color가 있으면 fill 속성으로 전달
  />
);

export default BlobHeart;
