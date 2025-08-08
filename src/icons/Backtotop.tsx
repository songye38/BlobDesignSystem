import { iconSizes } from '../tokens';
import BacktotopDesktop from '../assets/icons/back-to-top-desktop.svg';
import BacktotopMobile from '../assets/icons/back-to-top-mobile.svg';

interface BacktotopProps {
  variant?: 'desktop' | 'mobile';
  size?: number;
}

const Backtotop: React.FC<BacktotopProps> = ({
  variant = 'desktop',
  size = iconSizes.md, // 토큰 기본 사이즈 사용
}) => {
  const Icon = variant === 'desktop' ? BacktotopDesktop : BacktotopMobile;

  return <Icon width={size} height={size} />;
};

export default Backtotop;
