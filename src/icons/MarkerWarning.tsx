import { iconSizes } from '../tokens';
import WarningSVG from '../assets/icons/marker-atom.svg';

interface WarningProps {
  size?: number;
}

const Upload: React.FC<WarningProps> = ({ size = iconSizes.lg }) => {
  return <WarningSVG width={size} height={size} />;
};