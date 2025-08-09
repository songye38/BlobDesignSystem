import { iconSizes, colors } from '../tokens';

interface CurrentLocationProps {
  size?: keyof typeof iconSizes;
  color?: string;
}

const CurrentLocation: React.FC<CurrentLocationProps> = ({
  size = 'xs',
  color = colors.grayscale[700],
}) => {
  const iconSize = iconSizes[size];

  return (
    <img
      src="/icons/current-location.svg"
      width={iconSize}
      height={iconSize}
      alt="Current Location Icon"
      style={{ filter: color ? `drop-shadow(0 0 0 ${color})` : undefined }}
    />
  );
};

export default CurrentLocation;
