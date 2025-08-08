import { iconSizes } from '../tokens';

interface WriteProps {
  size?: keyof typeof iconSizes;
}

const Write: React.FC<WriteProps> = ({
  size = 'xs',
}) => {
  const iconSize = iconSizes[size];

  return (
    <img
      src="public/icons/write.svg"
      width={iconSize}
      height={iconSize}
      alt="Write Icon"
    />
  );
};

export default Write;








