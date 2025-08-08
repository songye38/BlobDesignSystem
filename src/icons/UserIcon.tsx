import { iconSizes } from '../tokens';
import LoggedInSVG from '../assets/icons/loggedIn.svg';
import LoggedOutSVG from '../assets/icons/loggedOut.svg';


interface UserIconProps {
  variant?: 'loggedIn' | 'loggedOut';
}

const UserIcon: React.FC<UserIconProps> = ({
  variant = 'loggedOut',
}) => {
  const Icon = variant === 'loggedIn' ? LoggedInSVG : LoggedOutSVG;

  return <Icon width={24} height={24} />;
};

export default UserIcon;
