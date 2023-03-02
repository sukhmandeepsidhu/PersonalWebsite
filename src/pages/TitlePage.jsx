import TopNavbar from "../components/TopNavbar";
import { Container } from "react-bootstrap";

const TitlePage = () => {
	return (
		<div>
			<TopNavbar />
			<Container>
				<h1>Pitchi Paaji</h1>
				<h1>Kaata Paau</h1>
				<h1>Nunny Baba</h1>
				<h1>Puli</h1>
			</Container>
		</div>
	);
};

export default TitlePage;
