import { iconSizes } from '../tokens';

interface ExploreProps {
  size?: keyof typeof iconSizes;
}

const Explore: React.FC<ExploreProps> = ({
  size = 'xs',
}) => {
  const iconSize = iconSizes[size];

  return (
    <img
      src="public/icons/explore.svg"
      width={iconSize}
      height={iconSize}
      alt="Explore Icon"
    />
  );
};

export default Explore;
