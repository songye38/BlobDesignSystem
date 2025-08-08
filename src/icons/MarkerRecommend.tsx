import { iconSizes } from '../tokens';

interface RecommendProps {
  size?: number;
}

const Recommend: React.FC<RecommendProps> = ({ size = iconSizes.lg }) => {
  return (
    <img
      src="../../public/icons/marker-thumbs-up.svg"
      width={size}
      height={size}
      alt="Recommend Icon"
    />
  );
};

export default Recommend;
