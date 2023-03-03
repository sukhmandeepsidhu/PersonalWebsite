import { Container } from 'react-bootstrap';
import './TitlePageBodyStyles.css';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const TitlePageBody = () => {
  return (
    <Container className='section'>
      <div className='sectionBody'>
        <p>Hi, I am</p>
        <h2>Sukhmandeep Singh</h2>
        <h2>I build things for the web.</h2>
        <p>
          Software Engineer with 2.5 years of experience proficient in React,
          Javascript, Typescript, Java, Python and HTML/CSS
        </p>
        <i className='bi bi-github'></i>
        <GoMarkGithub />
        <BsLinkedin />
        <MdEmail />
      </div>
    </Container>
  );
};

export default TitlePageBody;
