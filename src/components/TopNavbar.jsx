import { Navbar, Container } from 'react-bootstrap';

const NAV_TITLE = '<Sukhman />';

const TopNavbar = () => {
  return (
    <Navbar bg='light'>
      <Container>
        <Navbar.Brand>
          <h3>{NAV_TITLE}</h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default TopNavbar;
