
import '../index.css'
import {Container, Image} from 'react-bootstrap'

export default function About() {
  return (
    <Container className='fluid' id="about">
<Image className='headshot m-5' src='/public/Headshotsquare.jpg' roundedCircle fluid/>
      <h1 className='m-3'>About Alexa</h1>
      <p className="font-weight-bold ">
        I&apos;m a 2D Motion Graphics Designer with a knack for breathing life into ideas. <br />
        With experience in advertising, sports, and artistic ventures, I partner with brands to create animated
        video and illustration content. As a Monash University/EdX FullStack 6-month bootcamp graduate,
        I am eager to extend my skills into creative technologies.
      </p>
      <p>
        I&apos;ve worked with big agencies, startups, local artists,
        and brands of all sizes to shape their narratives with engaging video content.
        I&apos;ve contributed to the Industry Advisory Committee for RMIT&apos;s Diploma programs and served as an external industry
        contributor for their diploma students.
      </p>
      <p className='mb-5'>
        Whether it&apos;s a corporate narrative, an eLearning module, an advert, or an artistic vision, I&apos;m your go-to.
        From concept to creation, I&apos;m here to bring your content to life. Reach out today.
      </p >
    </Container>
  );
}
