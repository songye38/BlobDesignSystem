import { iconSizes } from '../tokens';

interface LoadingProps {
  size?: keyof typeof iconSizes;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'xs',
}) => {
  const iconSize = iconSizes[size];

  return (
    <img
      src="/icons/loading.svg"
      width={iconSize}
      height={iconSize}
      alt="Loading Icon"
    />
  );
};

export default Loading;
