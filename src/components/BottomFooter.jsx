import { Navbar, Container } from 'react-bootstrap';

const FOOTER_CONTENT = 'Designed & built by Sukhmandeep Singh';

const BottomFooter = () => {
  return (
    <Navbar fixed='bottom' bg='light'>
      <Container>{FOOTER_CONTENT}</Container>
    </Navbar>
  );
};
export default BottomFooter;
