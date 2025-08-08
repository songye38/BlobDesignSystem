import BellDefault from '../assets/icons/bell-default.svg';
import BellFilled from '../assets/icons/bell-alarm.svg';
import { iconSizes } from '../tokens';

interface BellProps {
  size?: keyof typeof iconSizes; // 'xs-16' | 'sm-20' | 'md-24' | 'lg-28'
  variant?: 'default' | 'alarm';
}

const Bell: React.FC<BellProps> = ({
  size = 'md',
  variant = 'filled',
}) => {
  const Icon = variant === 'filled' ? BellFilled : BellDefault;
  const iconSize = iconSizes[size];

  return <Icon width={iconSize} height={iconSize} />;
};

export default Bell;
