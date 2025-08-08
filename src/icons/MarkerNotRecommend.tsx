import { iconSizes } from '../tokens';
import   { ReactComponent as NotRecommendSVG } from '../assets/icons/marker-thumbs-down.svg';

interface NotRecommentProps {
  size?: number;
}

const Upload: React.FC<NotRecommentProps> = ({ size = iconSizes.lg }) => {
  return <NotRecommendSVG width={size} height={size} />;
};