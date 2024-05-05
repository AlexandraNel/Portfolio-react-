import PropTypes from "prop-types"; //proptypes for validation of props ie. logo
import "./Navigation.css";

export default function Footer({ logo, contact }) {
  return (
    <footer className="footer">
      <div className="footerLogo">{logo}</div>
      <div className="footerContact">{contact}</div>
    </footer>
  );
}

Footer.propTypes = {
  contact: PropTypes.oneOfType([PropTypes.node]).isRequired,
  logo: PropTypes.oneOfType([PropTypes.element]).isRequired,
};
