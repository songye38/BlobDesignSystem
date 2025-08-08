import { iconSizes } from '../tokens';

interface PictureProps {
  size?: number;
}

const Picture: React.FC<PictureProps> = ({ size = iconSizes.xs }) => {
  return (
    <img
      src="public/icons/picture.svg"
      width={size}
      height={size}
      alt="Picture Icon"
    />
  );
};

export default Picture;
