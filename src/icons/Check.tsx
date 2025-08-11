import { iconSizes } from '../tokens';

interface CheckProps {
  size?: keyof typeof iconSizes;
}

const Check: React.FC<CheckProps> = ({
  size = 'xs',
}) => {
  const iconSize = iconSizes[size];

  return (
    <img
      src="/icons/check.svg"
      width={iconSize}
      height={iconSize}
      alt="Check Icon"
    />
  );
};

export default Check;
