import { iconSizes } from '../tokens';
import { ReactComponent as BacktotopDesktop } from '../assets/icons/back-to-top-desktop.svg';
import { ReactComponent as BacktotopMobile } from '../assets/icons/back-to-top-mobile.svg';

interface BacktotopProps {
  variant?: 'desktop' | 'mobile';
  size?: number;
}

const Backtotop: React.FC<BacktotopProps> = ({
  variant = 'desktop',
  size = iconSizes.md,
}) => {
  const Icon = variant === 'desktop' ? BacktotopDesktop : BacktotopMobile;

  return <Icon width={size} height={size} />;
};

export default Backtotop;
