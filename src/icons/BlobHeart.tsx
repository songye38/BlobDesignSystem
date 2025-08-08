import { iconSizes } from '../tokens';

interface BlobHeartProps {
  size?: keyof typeof iconSizes; // 'xs' | 'sm' | 'md' | 'lg' 이런 식으로
  color?: string; // 이건 img로는 조작 불가라서 무시하거나 스타일로 따로 처리해야 해
}

const BlobHeart: React.FC<BlobHeartProps> = ({
  size = 'xs',
}) => {
  const iconSize = iconSizes[size];
  const src = '/public/icons/check-heart.svg'; // public 폴더에 SVG 파일 옮겼다고 가정

  return <img src={src} width={iconSize} height={iconSize} alt="Blob heart icon" />;
};

export default BlobHeart;
