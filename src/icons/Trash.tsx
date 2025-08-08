import { iconSizes } from '../tokens';

interface TrashProps {
  size?: number;
}

const Trash: React.FC<TrashProps> = ({ size = iconSizes.xs }) => {
  return (
    <img
      src="/src/assets/icons/trash.svg"
      width={size}
      height={size}
      alt="Trash Icon"
    />
  );
};

export default Trash;
