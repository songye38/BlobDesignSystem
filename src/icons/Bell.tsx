import { iconSizes } from '../tokens';

interface BellProps {
  size?: keyof typeof iconSizes; // 'xs-16' | 'sm-20' | 'md-24' | 'lg-28'
  variant?: 'default' | 'alarm';
}

const Bell: React.FC<BellProps> = ({
  size = 'md',
  variant = 'alarm',
}) => {
  // SVG 파일 public 폴더에 옮겼다고 가정하고 경로 지정
  const src =
    variant === 'alarm'
      ? '/public/icons/bell-alarm.svg'
      : '/public/icons/bell-default.svg';

  const iconSize = iconSizes[size];

  return <img src={src} width={iconSize} height={iconSize} alt="Bell icon" />;
};

export default Bell;
