import { iconSizes } from '../tokens';

interface NotRecommendProps {
  size?: number;
}

const NotRecommend: React.FC<NotRecommendProps> = ({ size = iconSizes.lg }) => {
  return (
    <img 
      src="/src/assets/icons/marker-thumbs-down.svg" 
      width={size} 
      height={size} 
      alt="Not Recommend" 
    />
  );
};

export default NotRecommend;
