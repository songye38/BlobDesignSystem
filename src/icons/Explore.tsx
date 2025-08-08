import { iconSizes } from '../tokens';
import ExploreSVG from '../assets/icons/Explore.svg';

interface ExploreProps {
  size?: number;
}

const Explore: React.FC<ExploreProps> = ({
  size = iconSizes.xs,
}) => (
  <ExploreSVG
    width={size}
    height={size}
  />
);

export default Explore;
