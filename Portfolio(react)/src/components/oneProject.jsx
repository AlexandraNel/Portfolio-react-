import PropTypes from "prop-types";
import { Container, Image, Row, Col } from "react-bootstrap";
// import './project.css';

function Project({ img, title, link, repo }) {
  return (
    <Container className='mb-5' >
      <Row className="mt-5">
        <Col>
          <h2 style={{ marginBottom: '0.0em' }}>{title}</h2>

          {/* if link exists */}
          {link && (
            <a href={link}>
              <h6 style={{ marginBottom: '0.0em' }}>Link to Deployed App</h6>
            </a>
          )}
          <a href={repo}>
            <h6 style={{ marginBottom: '0.0em' }}>Link to Repository</h6>
          </a>
        </Col>
      </Row>

      <Row>
        <Col>
          <Image
            rounded
            fluid
            className="img-fluid"
            style={{ maxWidth: "75%" }}
            src={img}
            alt={title}
          />
        </Col>
      </Row>
    </Container>
  );
}
//es lint error proptypes not defined- imported proptypes and defined strings required
Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Project;
