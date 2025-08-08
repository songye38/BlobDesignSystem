interface MainWriteProps {
  variant?: 'desktop' | 'mobile';
  size?: number; // 직접 사이즈 조절 가능
}

const MainWrite: React.FC<MainWriteProps> = ({
  variant = 'desktop',
  size,
}) => {
  // 기본 크기 설정
  const defaultSize = variant === 'desktop' ? 90 : 45;
  const finalSize = size ?? defaultSize;

  // SVG 파일 경로 (public 폴더 기준)
  const src = variant === 'desktop' 
    ? '/src/assets/icons/main-write-desktop.svg' 
    : '/src/assets/icons/main-write-mobile.svg';

  return (
    <img 
      src={src} 
      width={finalSize} 
      height={finalSize} 
      alt={`Main Write ${variant}`} 
    />
  );
};

export default MainWrite;
