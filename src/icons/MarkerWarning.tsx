import { iconSizes } from '../tokens';

interface WarningProps {
  size?: number;
}

const Warning: React.FC<WarningProps> = ({ size = iconSizes.lg }) => {
  return (
    <img
      src="/icons/marker-atom.svg"
      width={size}
      height={size}
      alt="Warning Icon"
    />
  );
};

export default Warning;
