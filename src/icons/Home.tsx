import { iconSizes } from '../tokens';

interface HomeProps {
  size?: keyof typeof iconSizes;
}

const Home: React.FC<HomeProps> = ({
  size = 'xs',
}) => {
  const iconSize = iconSizes[size];

  return (
    <img
      src="/src/assets/icons/home.svg"
      width={iconSize}
      height={iconSize}
      alt="Home Icon"
    />
  );
};

export default Home;
