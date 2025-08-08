import { iconSizes } from '../tokens';
import  { ReactComponent as QuestionSVG } from '../assets/icons/marker-magic-wand.svg';

interface QuestionProps {
  size?: number;
}

const Upload: React.FC<QuestionProps> = ({ size = iconSizes.lg }) => {
  return <QuestionSVG width={size} height={size} />;
};