import { iconSizes } from '../tokens';
import  { ReactComponent as WarningSVG } from '../assets/icons/marker-atom.svg';

interface WarningProps {
  size?: number;
}

const Upload: React.FC<WarningProps> = ({ size = iconSizes.lg }) => {
  return <WarningSVG width={size} height={size} />;
};