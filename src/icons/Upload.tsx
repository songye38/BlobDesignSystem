import { iconSizes } from '../tokens';
import UploadSVG from '../assets/icons/upload.svg';

interface UploadProps {
  size?: number;
}

const Upload: React.FC<UploadProps> = ({ size = iconSizes.xs }) => {
  return <UploadSVG width={size} height={size} />;
};