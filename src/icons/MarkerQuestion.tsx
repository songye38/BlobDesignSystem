import { iconSizes } from '../tokens';

interface QuestionProps {
  size?: number;
}

const Question: React.FC<QuestionProps> = ({ size = iconSizes.lg }) => {
  return (
    <img
      src="/icons/marker-magic-wand.svg"
      width={size}
      height={size}
      alt="Question Icon"
    />
  );
};

export default Question;
