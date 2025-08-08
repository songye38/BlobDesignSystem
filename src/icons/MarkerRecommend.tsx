import { iconSizes } from '../tokens';
import  { ReactComponent as RecommendSVG } from '../assets/icons/marker-thumbs-up.svg';

interface RecommendProps {
  size?: number;
}

const Upload: React.FC<RecommendProps> = ({ size = iconSizes.lg }) => {
  return <RecommendSVG width={size} height={size} />;
};