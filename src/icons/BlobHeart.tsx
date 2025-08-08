import { iconSizes } from '../tokens';
import BlobHeartSVG from '../assets/icons/check-heart.svg';

interface BlobHeartProps {
  size?: number;
  color?: string;
}

const BlobHeart: React.FC<BlobHeartProps> = ({
  size = iconSizes.xs,
}) => (
  <BlobHeartSVG
    width={size}
    height={size}
  />
);

export default BlobHeart;
