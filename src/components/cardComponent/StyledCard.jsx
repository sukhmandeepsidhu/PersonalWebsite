import { Container } from "react-bootstrap";
import "./StyledCardStyles.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const spanSpacing = { margin: "0.5rem", cursor: "pointer" };
const Github = ({ github }) => {
	return (
		<a href={github}>
			<GoMarkGithub style={spanSpacing} />
		</a>
	);
};
const LinkedIn = ({ linkedin }) => {
	return (
		<a href={linkedin}>
			<BsLinkedin style={spanSpacing} />
		</a>
	);
};
const Email = ({ email }) => {
	return (
		<a href={`mailto:${email}`}>
			<MdEmail style={spanSpacing} />
		</a>
	);
};

const StyledCard = ({
	header,
	title,
	subtitle,
	body,
	github,
	linkedin,
	email,
}) => {
	return (
		<Container className='section'>
			<div className='sectionBody'>
				{header && <p>{header}</p>}
				{title && <h2>{title}</h2>}
				{subtitle && <h2>{subtitle}</h2>}
				{body && <p>{body}</p>}
				<Github github={github} />
				<LinkedIn linkedin={linkedin} />
				<Email email={email} />
			</div>
		</Container>
	);
};

export default StyledCard;
