import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className="navbar-logo">
      <img src={logo} alt="logo" />
      <span className="logo-text">enato</span>
      <span className="logo-text-2">Steelfixers</span>
    </div>
  );
};
export default Logo;
