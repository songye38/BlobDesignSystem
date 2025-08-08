import { iconSizes } from '../tokens';

interface UserIconProps {
  variant?: 'loggedIn' | 'loggedOut';
  size?: number;
  color?: string; // img 태그에선 color 직접 적용 불가, CSS로 처리해야 함
}

const UserIcon: React.FC<UserIconProps> = ({
  variant = 'loggedOut',
  size = iconSizes.md,
  color,
}) => {
  const src = variant === 'loggedIn' ? '../../public/icons/loggedIn.svg' : '../../public/icons/loggedOut.svg';

  // color는 img 태그에 직접 적용 못 하니까, 필요하면 스타일로 처리하거나 부모에서 제어하는게 좋아
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={variant === 'loggedIn' ? 'Logged In Icon' : 'Logged Out Icon'}
      style={color ? { filter: `drop-shadow(0 0 0 ${color})` } : undefined}
    />
  );
};

export default UserIcon;
