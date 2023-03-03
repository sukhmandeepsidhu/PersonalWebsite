import StyledCard from "./cardComponent/StyledCard";

const HEADER = "Hi, I am";
const TITLE = "Sukhmandeep Singh";
const SUBTITLE = "I build things for the web.";
const BODY =
	"Software Engineer with 2.5 years of experience proficient in React,Javascript, Typescript, Java, Python and HTML/CSS";
const GITHUB = "https://github.com/sukhmandeepsidhu";
const LINKEDIN = "https://www.linkedin.com/in/sukhmandeepsidhu/";
const EMAIL = "sukhmandeep@myyahoo.com";

const TitlePageBody = () => {
	return (
		<StyledCard
			header={HEADER}
			title={TITLE}
			subtitle={SUBTITLE}
			body={BODY}
			github={GITHUB}
			linkedin={LINKEDIN}
			email={EMAIL}
		/>
	);
};

export default TitlePageBody;
