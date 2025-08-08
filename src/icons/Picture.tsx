import { iconSizes } from '../tokens';
import PictureSVG from '../assets/icons/picture.svg';

interface PictureProps {
  size?: number;
}

const Upload: React.FC<PictureProps> = ({ size = iconSizes.xs }) => {
  return <PictureSVG width={size} height={size} />;
};