import cvPic from "/profilepic.jpg";
import user from "/user.svg";
import email from "/email.svg";
import tele from "/tele.svg";
import location from "/location.svg";
import "../styles/Previewsection.css";

function Previewsection() {
	return (
		<div className="previewSection">
			<div className="cvWrapper">
				<CV></CV>
			</div>
		</div>
	);
}

function CV() {
	return (
		<div className="cv">
			<div className="cvLeft">
				<div className="cvPic-bg"></div>
				<h1>Hamza Chera</h1>
				<img src={cvPic} alt="" />
				<div className="sectionsWrapper">
					<div className="personalWrapper">
						<h2>Personal Details</h2>
						<PersonalElement
							className={"name"}
							icon={user}
							title={"Name"}
							text={"Hamza Chera"}
						></PersonalElement>
						<PersonalElement
							className={"email"}
							icon={email}
							title={"Email"}
							text={"cherahamza1@gmail.com"}
						></PersonalElement>
						<PersonalElement
							className={"phoneNumber"}
							icon={tele}
							title={"Phone Number"}
							text={"+213 540 220 211"}
						></PersonalElement>
						<PersonalElement
							className={"location"}
							icon={location}
							title={"Location"}
							text={"Jijel, Algeria"}
						></PersonalElement>
					</div>
					<div className="interestsWrapper">
						<h2>Interests</h2>
						<ul>
							<li>History</li>
							<li>Sports</li>
							<li>Art</li>
						</ul>
					</div>
					<div className="languagesWrapper">
						<h2>Languages</h2>
						<ul>
							<li>English</li>
							<li>French</li>
							<li>Arabic</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="cvRight">
				<p className="bioText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos,
					ullam repellat magnam cupiditate, explicabo dolore perferendis est
					placeat expedita dolores ipsum et deserunt dolor! Numquam magni
					eveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente ut
					reiciendis incidunt fugit.
				</p>
				<hr />
				<div className="workExpWrapper">
					<h1>Work Experience</h1>
					<WorkExpElement
						job={"Junior Software Developer"}
						company={"Microsoft Corporation"}
						location={"California"}
						startDate={"2015"}
						endDate={"Present"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos,ullam repellat magnam cupiditate, explicabo dolore perferendis estplaceat expedita dolores ipsum et deserunt dolor! Numquam magnieveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente utreiciendis incidunt fugit."
						}
					></WorkExpElement>
					<WorkExpElement
						job={"Junior Software Developer"}
						company={"Microsoft Corporation"}
						location={"California"}
						startDate={"2015"}
						endDate={"Present"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos,ullam repellat magnam cupiditate, explicabo dolore perferendis estplaceat expedita dolores ipsum et deserunt dolor! Numquam magnieveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente utreiciendis incidunt fugit."
						}
					></WorkExpElement>
					<WorkExpElement
						job={"Junior Software Developer"}
						company={"Microsoft Corporation"}
						location={"California"}
						startDate={"2015"}
						endDate={"Present"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos,ullam repellat magnam cupiditate, explicabo dolore perferendis estplaceat expedita dolores ipsum et deserunt dolor! Numquam magnieveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente utreiciendis incidunt fugit."
						}
					></WorkExpElement>
				</div>
				<hr />
				<div className="educationWrapper">
					<h1>Education</h1>
					<EntryHeader
						title={"Master in Computer Science"}
						subTitle={"University of Constantine"}
						timeSpan={"2024 - Present"}
					></EntryHeader>
					<EntryHeader
						title={"Bachelor in Computer Science"}
						subTitle={"University of Jijel"}
						timeSpan={"2020 - 2024"}
					></EntryHeader>
				</div>
				<hr />
				<div className="projectsWrapper">
					<h1>Projects</h1>
					<ProjectElement
						title={"CV Designer"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos,ullam repellat magnam cupiditate, explicabo dolore perferendis estplaceat expedita dolores ipsum et deserunt dolor! Numquam magnieveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente utreiciendis incidunt fugit."
						}
					></ProjectElement>
					<ProjectElement
						title={"Weather App"}
						description={
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos,ullam repellat magnam cupiditate, explicabo dolore perferendis estplaceat expedita dolores ipsum et deserunt dolor! Numquam magnieveniet voluptatibus saepe. Deleniti aut quos quas rem sapiente utreiciendis incidunt fugit."
						}
					></ProjectElement>
				</div>
				<hr />
				<div className="skillsWrapper">
					<h1>Skills</h1>
					<p>JavaScript, HTML, CSS, Webpack, React, Node.js</p>
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

export default Previewsection;
