import { Navbar } from "react-bootstrap";

const FOOTER_CONTENT = "Designed & built by Sukhmandeep Singh";

const BottomFooter = () => {
	return (
		<Navbar
			fixed='bottom'
			bg='light'
			className='justify-content-center'
			style={{ padding: "2em" }}
		>
			{FOOTER_CONTENT}
		</Navbar>
	);
};
export default BottomFooter;
