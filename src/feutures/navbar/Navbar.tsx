import Logo from './Logo';
import './navbar_styles.css';
import SidebarButton from './SidebarButton';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Logo />
      <NavbarItem title="home" />
      <NavbarItem title="about" />
      <NavbarItem title="services" />
      <NavbarItem title="gallery" />
      <NavbarItem title="contact" />
      <SidebarButton />
    </nav>
  );
};
export default Navbar;
