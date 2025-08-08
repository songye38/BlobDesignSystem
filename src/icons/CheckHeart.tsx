import BlobHeartDefault from '../assets/icons/check-heart-default.svg';
import BlobHeartFilled from '../assets/icons/check-heart-filled.svg';
import { iconSizes } from '../tokens';

interface BlobHeartProps {
  size?: keyof typeof iconSizes; // 'xs-16' | 'sm-20' | 'md-24' | 'lg-28'
  variant?: 'default' | 'filled';
}

const BlobHeart: React.FC<BlobHeartProps> = ({
  size = 'md',
  variant = 'filled',
}) => {
  const Icon = variant === 'filled' ? BlobHeartFilled : BlobHeartDefault;
  const iconSize = iconSizes[size];

  return <Icon width={iconSize} height={iconSize} />;
};

export default BlobHeart;
