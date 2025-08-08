import { iconSizes } from '../tokens';

interface RefreshProps {
  size?: number;
}

const Refresh: React.FC<RefreshProps> = ({ size = iconSizes.xs }) => {
  return (
    <img
      src="/public/icons/refresh.svg"
      width={size}
      height={size}
      alt="Refresh Icon"
    />
  );
};

export default Refresh;
