import { iconSizes } from '../tokens';
import TrashSVG from '../assets/icons/trash.svg';

interface TrashProps {
  size?: number;
}

const Upload: React.FC<TrashProps> = ({ size = iconSizes.xs }) => {
  return <TrashSVG width={size} height={size} />;
};