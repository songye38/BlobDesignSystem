import { iconSizes } from '../tokens';

interface BlobHeartProps {
  size?: keyof typeof iconSizes; // 'xs' | 'sm' | 'md' | 'lg' 등
  variant?: 'default' | 'filled';
}

const BlobHeart: React.FC<BlobHeartProps> = ({
  size = 'md',
  variant = 'filled',
}) => {
  const iconSize = iconSizes[size];
  const src =
    variant === 'filled'
      ? '/public/icons/check-heart-filled.svg'
      : '/public/icons/check-heart-default.svg';

  return <img src={src} width={iconSize} height={iconSize} alt="Blob heart icon" />;
};

export default BlobHeart;
