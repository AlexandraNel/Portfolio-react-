import PropTypes from "prop-types"; //proptypes for validation of props ie. logo
import "./Navigation.css";
import { Container, Row, Col,} from "react-bootstrap";

export default function Footer({ logo, contact, git, linkedIn, instagram }) {
  return (
  
      <Container>
        <Row className="footer ">
      <Col className="footerLogo">{logo}</Col>
      <Col className="footerGit">{git}</Col>
      <Col className="footerGit">{instagram}</Col>
      <Col className="footerGit">{contact}</Col>
      <Col className="footerGit">{linkedIn}</Col>
     
      </Row>
      </Container>
   
  );
}

Footer.propTypes = {
  contact: PropTypes.oneOfType([PropTypes.node]).isRequired,
  logo: PropTypes.oneOfType([PropTypes.element]).isRequired,
  git: PropTypes.oneOfType([PropTypes.element]).isRequired,
  linkedIn: PropTypes.oneOfType([PropTypes.element]).isRequired,
 instagram: PropTypes.oneOfType([PropTypes.element]).isRequired,
};
