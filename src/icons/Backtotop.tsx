import { iconSizes } from '../tokens';

interface BacktotopProps {
  variant?: 'desktop' | 'mobile';
  size?: number;
}

const Backtotop: React.FC<BacktotopProps> = ({
  variant = 'desktop',
  size = iconSizes.md,
}) => {
  const src =
    variant === 'desktop'
      ? '../../public/icons/back-to-top-desktop.svg'
      : '../../public/icons/back-to-top-mobile.svg';

  return <img src={src} width={size} height={size} alt="Back to top icon" />;
};

export default Backtotop;
