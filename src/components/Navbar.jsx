import logo from "../../public/logo.svg";
import personal from "../../public/personal.svg";
import education from "../../public/education.svg";
import work from "../../public/work.svg";
import projects from "../../public/projects.svg";
import skills from "../../public/skills.svg";
import interests from "../../public/interests.svg";
import languages from "../../public/languages.svg";
import "../styles/Navbar.css";

function Navbar() {
	return (
		<div className="navBar">
			<img src={logo} alt="logo" />
			<div className="btnsWrapper">
				<Button img={personal}></Button>
				<Button img={education}></Button>
				<Button img={work}></Button>
				<Button img={projects}></Button>
				<Button img={skills}></Button>
				<Button img={interests}></Button>
				<Button img={languages}></Button>
			</div>
		</div>
	);
}

function Button({ img }) {
	return (
		<>
			<button className="navBtn">
				<img className="navLogo" src={img} />
			</button>
		</>
	);
}

export default Navbar;
