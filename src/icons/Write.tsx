import { iconSizes } from '../tokens';
import  { ReactComponent as WriteSVG } from '../assets/icons/write.svg';

interface WriteProps {
  size?: number;
}

const Write: React.FC<WriteProps> = ({
  size = iconSizes.xs,
}) => {
  console.log('WriteSVG type:', typeof WriteSVG);  // 여기 추가
  return (
    <WriteSVG
      width={size}
      height={size}
    />
  );
};

export default Write;
