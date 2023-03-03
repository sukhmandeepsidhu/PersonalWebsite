import { Navbar, Container } from "react-bootstrap";

const NAV_TITLE = "<Sukhman />";

const TopNavbar = () => {
	return (
		<Navbar bg='light'>
			<Container>
				<h3>{NAV_TITLE}</h3>
			</Container>
		</Navbar>
	);
};
export default TopNavbar;
