import { iconSizes } from '../tokens';
import WriteSVG from '../assets/icons/write.svg';

interface WriteProps {
  size?: number;
}

const Write: React.FC<WriteProps> = ({
  size = iconSizes.xs,
}) => (
  <WriteSVG
    width={size}
    height={size}
  />
);

export default Write;
