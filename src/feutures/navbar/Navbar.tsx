import Logo from './Logo';
import './navbar_styles.css';
import SidebarButton from './SidebarButton';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <NavbarItem title="home" />
      <NavbarItem title="about" />
      <NavbarItem title="services" />
      <NavbarItem title="gallery" />
      <NavbarItem title="contact" />
      <SidebarButton />
    </div>
  );
};
export default Navbar;
