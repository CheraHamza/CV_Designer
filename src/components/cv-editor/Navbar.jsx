import logo from "/logo.png";
import personal from "/personal.svg";
import education from "/education.svg";
import work from "/work.svg";
import projects from "/projects.svg";
import skills from "/skills.svg";
import interests from "/interests.svg";
import languages from "/languages.svg";

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
					<button
						aria-label={"Navigate to " + item.key}
						key={item.key}
						className={
							"navBtn" + (item.key === activeNavItem ? " selected" : "")
						}
						onClick={() => onNavChange(item.key)}
					>
						<img className="navLogo" src={item.icon} alt="" />
					</button>
				))}
			</div>
		</div>
	);
}

export default Navbar;
