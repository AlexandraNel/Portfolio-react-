import About from "../components/about";
import {Container} from 'react-bootstrap'
//  all my portfolio bits are here
export default function HomePage() {
  return (
    <Container className= 'fluid' id="homepage">
      <About />
    </Container>
  );
}
