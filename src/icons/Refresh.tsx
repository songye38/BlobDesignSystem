import { iconSizes } from '../tokens';
import RefreshSVG from '../assets/icons/refresh.svg';

interface RefreshProps {
  size?: number;
}

const Refresh: React.FC<RefreshProps> = ({
  size = iconSizes.xs,
}) => (
  <RefreshSVG
    width={size}
    height={size}
  />
);

export default Refresh;
