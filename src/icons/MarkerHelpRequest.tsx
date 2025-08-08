import { iconSizes } from '../tokens';
import  { ReactComponent as HelpRequestSVG } from '../assets/icons/marker-signal.svg';

interface HelpRequestProps {
  size?: number;
}

const Upload: React.FC<HelpRequestProps> = ({ size = iconSizes.lg }) => {
  return <HelpRequestSVG width={size} height={size} />;
};