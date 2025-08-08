import { iconSizes } from '../tokens';

interface WriteProps {
  size?: number;
}

const Write: React.FC<WriteProps> = ({
  size = iconSizes.xs,
}) => {
  return (
    <img
      src="/src/assets/icons/write.svg"
      width={size}
      height={size}
      alt="Write Icon"
    />
  );
};

export default Write;
