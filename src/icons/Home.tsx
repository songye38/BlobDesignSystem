import { iconSizes } from '../tokens';
import  { ReactComponent as HomeSVG } from '../assets/icons/home.svg';

interface HomeProps {
  size?: number;
}

const Home: React.FC<HomeProps> = ({
  size = iconSizes.xs,
}) => (
  <HomeSVG
    width={size}
    height={size}
  />
);

export default Home;
