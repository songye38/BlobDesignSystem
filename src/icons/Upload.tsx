import { iconSizes } from '../tokens';

interface UploadProps {
  size?: number;
}

const Upload: React.FC<UploadProps> = ({ size = iconSizes.xs }) => {
  return (
    <img
      src="../../public/icons/upload.svg"
      width={size}
      height={size}
      alt="Upload Icon"
    />
  );
};

export default Upload;
