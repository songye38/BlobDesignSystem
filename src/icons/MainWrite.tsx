import MainWriteDesktop from '../assets/icons/main-write-desktop.svg';
import MainWriteMobile from '../assets/icons/main-write-mobile.svg';

interface MainWriteProps {
  variant?: 'desktop' | 'mobile';
  size?: number; // 직접 사이즈 조절 가능
}

const MainWrite: React.FC<MainWriteProps> = ({
  variant = 'desktop',
  size,
}) => {
  const Icon = variant === 'desktop' ? MainWriteDesktop : MainWriteMobile;

  // 기본 크기 설정
  const defaultSize = variant === 'desktop' ? 90 : 45;

  return <Icon width={size ?? defaultSize} height={size ?? defaultSize} />;
};

export default MainWrite;
