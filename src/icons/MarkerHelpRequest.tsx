import { iconSizes } from '../tokens';

interface HelpRequestProps {
  size?: number;
}

const Upload: React.FC<HelpRequestProps> = ({ size = iconSizes.lg }) => {
  return (
    <img 
      src="public/icons/marker-signal.svg" 
      width={size} 
      height={size} 
      alt="Help Request" 
    />
  );
};

export default Upload;
