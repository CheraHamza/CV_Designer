import logo from "/logo.png";
import personal from "/personal.svg";
import education from "/education.svg";
import work from "/work.svg";
import projects from "/projects.svg";
import skills from "/skills.svg";
import interests from "/interests.svg";
import languages from "/languages.svg";
import "../styles/Navbar.css";

function Navbar({ activeNavItem, onNavChange }) {
	const navItems = [
		{ key: "personal", icon: personal },
		{ key: "education", icon: education },
		{ key: "work", icon: work },
		{ key: "projects", icon: projects },
		{ key: "skills", icon: skills },
		{ key: "interests", icon: interests },
		{ key: "languages", icon: languages },
	];

	return (
		<div className="navBar">
			<img src={logo} alt="logo" />
			<div className="btnsWrapper">
				{navItems.map((item) => (
					<Button
						key={item.key}
						img={item.icon}
						isSelected={item.key === activeNavItem}
						handleClick={() => {
							onNavChange(item.key);
						}}
					></Button>
				))}
				;
			</div>
		</div>
	);
}

function Button({ key, img, isSelected, handleClick }) {
	return (
		<>
			<button
				key={key}
				className={"navBtn" + (isSelected ? " selected" : "")}
				onClick={handleClick}
			>
				<img className="navLogo" src={img} />
			</button>
		</>
	);
}

export default Navbar;
