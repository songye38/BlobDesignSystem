import { iconSizes } from '../tokens';
import  { ReactComponent as LoggedInSVG } from '../assets/icons/loggedIn.svg';
import  { ReactComponent as LoggedOutSVG } from '../assets/icons/loggedOut.svg';

interface UserIconProps {
  variant?: 'loggedIn' | 'loggedOut';
  size?: number;  // 사이즈를 props로 받도록 추가
  color?: string; // 혹시 필요하면 색상도 받을 수 있게 추가 가능
}

const UserIcon: React.FC<UserIconProps> = ({
  variant = 'loggedOut',
  size = iconSizes.md,   // 기본 사이즈는 디자인 토큰으로
  color,                // color는 SVG에 따라 다르니 필요하면 사용
}) => {
  const Icon = variant === 'loggedIn' ? LoggedInSVG : LoggedOutSVG;

  return (
    <Icon
      width={size}
      height={size}
      fill={color}   // color를 넣고 싶으면 SVG가 fill 속성을 받아야 함
    />
  );
};

export default UserIcon;
