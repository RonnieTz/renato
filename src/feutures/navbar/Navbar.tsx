import Logo from './Logo';
import './navbar_styles.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <div className="navbar-item">
        <a href="/">HOME</a>
      </div>
      <div className="navbar-item">
        <a href="/about">ABOUT US</a>
      </div>
      <div className="navbar-item">
        <a href="/services">SERVICES</a>
      </div>
      <div className="navbar-item">
        <a href="/gallery">GALLERY</a>
      </div>
      <div className="navbar-item">
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
};
export default Navbar;
