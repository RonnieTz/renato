import './footer_styles.css';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-container">
      Copyright &copy; {`${year} Renato Steelfixers`}{' '}
    </div>
  );
};
export default Footer;
