import './home_styles.css';
import image from '../../assets/20230705_144111.jpg';

const HomePage = () => {
  return (
    <main className="home">
      <img style={{ width: '100%' }} src={image} alt="image" />
    </main>
  );
};
export default HomePage;
