import userIcon from "/user.svg";
import emailIcon from "/email.svg";
import teleIcon from "/tele.svg";
import locationIcon from "/location.svg";
import "../../styles/preview.css";

function Preview({ data }) {
	return (
		<div className="preview">
			<CV data={data}></CV>
		</div>
	);
}

function CV({ data }) {
	const picture = data.personal.picture;
	const fullName = data.personal.firstName + " " + data.personal.lastName;
	const email = data.personal.email;
	const phoneNumber = data.personal.phoneNumber;
	const location = data.personal.location;
	const bio = data.personal.bio;
	const education = data.education;
	const workExperiences = data.work;
	const projects = data.projects;
	const skills = data.skills;
	const languages = data.languages;
	const interests = data.interests;

	return (
		<div className="cv">
			<div className="cvLeft">
				<div className="cvPic-bg"></div>
				<h1>{fullName}</h1>
				<img src={picture} alt="" />
				<div className="sectionsWrapper">
					<div className="personalWrapper">
						<h2>Personal Details</h2>
						<PersonalElement
							className={"name"}
							icon={userIcon}
							title={"Name"}
							text={fullName}
						></PersonalElement>
						<PersonalElement
							className={"email"}
							icon={emailIcon}
							title={"Email"}
							text={email}
						></PersonalElement>
						<PersonalElement
							className={"phoneNumber"}
							icon={teleIcon}
							title={"Phone Number"}
							text={phoneNumber}
						></PersonalElement>
						<PersonalElement
							className={"location"}
							icon={locationIcon}
							title={"Location"}
							text={location}
						></PersonalElement>
					</div>
					<div className="interestsWrapper">
						<h2>Interests</h2>
						<ul>
							{interests.map((interest) => (
								<li>{interest}</li>
							))}
						</ul>
					</div>
					<div className="languagesWrapper">
						<h2>Languages</h2>
						<ul>
							{languages.map((language) => (
								<li>{language}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="cvRight">
				<p className="bioText">{bio}</p>
				<hr />
				<div className="educationWrapper">
					<h1>Education</h1>
					{education.map((element) => (
						<EntryHeader
							title={element.schoolName}
							subTitle={element.degree + ", " + element.location}
							timeSpan={element.startDate + " - " + element.endDate}
						></EntryHeader>
					))}
				</div>
				<hr />
				<div className="workExpWrapper">
					<h1>Work Experience</h1>
					{workExperiences.map((workExperience) => (
						<WorkExpElement
							job={workExperience.job}
							company={workExperience.company}
							location={workExperience.location}
							startDate={workExperience.startDate}
							endDate={workExperience.endDate}
							description={workExperience.description}
						></WorkExpElement>
					))}
				</div>
				<hr />
				<div className="projectsWrapper">
					<h1>Projects</h1>
					{projects.map((project) => (
						<ProjectElement
							title={project.projectName}
							description={project.description}
						></ProjectElement>
					))}
				</div>
				<hr />
				<div className="skillsWrapper">
					<h1>Skills</h1>
					<p>{skills.join(", ")}</p>
				</div>
			</div>
		</div>
	);
}

function PersonalElement({ className, icon, title, text }) {
	return (
		<div className={"personalElement " + className}>
			<img src={icon} />
			<div>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	);
}

function WorkExpElement({
	className,
	job,
	company,
	location,
	startDate,
	endDate,
	description,
}) {
	return (
		<div className={"workExpElement " + className}>
			<EntryHeader
				title={job}
				subTitle={company + ", " + location}
				timeSpan={startDate + " - " + endDate}
			></EntryHeader>
			<p className="description">{description}</p>
		</div>
	);
}

function EntryHeader({ className, title, subTitle, timeSpan }) {
	return (
		<div className={"entryHeader " + className}>
			<div>
				<h2>{title}</h2>
				<p>{subTitle}</p>
			</div>
			<p className="timeSpan">{timeSpan}</p>
		</div>
	);
}

function ProjectElement({ className, title, description }) {
	return (
		<div className={"projectElement " + className}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

export default Preview;
