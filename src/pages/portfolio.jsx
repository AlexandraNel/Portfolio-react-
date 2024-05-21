import Project from "../components/oneProject";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import IRL from '../../public/IRL'
import techtalks from '../../public/video'
import JATE from '../../public/JATE'
import logoBuilder from '/02mylogo.svg'
import cossyLivs from '/hero.jpg'
import cmdReadMe from '/commandlineradme.JPG'

function Portfolio() {
  return (
    <Container  className="mt-5">
      <h1>Projects</h1>
      <Row className='OutlineYELLOW'>
        <Col>
          <Project
            img={IRL}
            title="IRL"
            link="https://powerful-shelf-37778-84a56d43e15f.herokuapp.com/"
            repo="https://github.com/AlexandraNel/IRL.git"
          />
        </Col>
        <Col>
          <Project
            img={techtalks}
            title="Tech Talks"
            link="https://techtalks-87552bfebf03.herokuapp.com/"
            repo="https://github.com/AlexandraNel/TechTalks"
          />
        </Col>
      </Row>

      <Row >
        <Col>
          <Project
            img={JATE}
            title="JATE: Just Another Text Editor"
            link="https://just-another-text-editor-k8km.onrender.com/"
            repo="https://github.com/AlexandraNel/Just-Another-Text-Editor.git"
          />
        </Col>
        <Col>
          <Project
            img={logoBuilder}
            title="Simple Commandline Logo Generator"
            repo="https://github.com/AlexandraNel/LogoGenerator.git"
          />
        </Col>
      </Row>

      <Row className='OutlineYELLOW'>
        <Col>
          <Project
            img={cossyLivs}
            title="Cossy Livs Budget tracker"
            repo="https://github.com/AlexandraNel/cossylivs-budget-tracker.git"
          />
        </Col>
        <Col>
          <Project
            img={cmdReadMe}
            title="Command Line ReadMe Generator"
            repo="https://github.com/AlexandraNel/CommandLineReadMe.git"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
