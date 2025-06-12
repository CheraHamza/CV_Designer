import bin from "/bin.svg";
import PersonalForm from "./forms/PersonalForm";
import EducationForm from "./forms/EducationForm";
import ExperienceForm from "./forms/ExperienceForm";
import ProjectForm from "./forms/ProjectForm";
import SkillsForm from "./forms/SkillsForm";
import InterestsForm from "./forms/InterestsForm";
import LanguagesForm from "./forms/LanguagesForm";
import { useState } from "react";

function Sidepanel({ activeNavItem, data, setData }) {
	const initFormsState = {
		education: { isActive: false, id: "", isNewForm: false },
		work: { isActive: false, id: "", isNewForm: false },
		projects: { isActive: false, id: "", isNewForm: false },
	};
	const [formsState, setFormsState] = useState(initFormsState);

	const handleAddEntry = (section) => {
		let newEntry;
		switch (section) {
			case "education":
				newEntry = {
					id: crypto.randomUUID(),
					schoolName: "",
					degree: "",
					startDate: "",
					endDate: "",
					location: "",
				};
				break;
			case "work":
				newEntry = {
					id: crypto.randomUUID(),
					company: "",
					job: "",
					startDate: "",
					endDate: "",
					location: "",
					description: "",
				};
				break;
			case "projects":
				newEntry = {
					id: crypto.randomUUID(),
					projectName: "",
					description: "",
				};
				break;
			default:
				return;
		}
		setData((prevData) => ({
			...prevData,
			[section]: [...prevData[section], newEntry],
		}));
		setFormsState((prevState) => ({
			...prevState,
			[section]: { isActive: true, id: newEntry.id, isNewForm: true },
		}));
	};
	return (
		<div className="sidepanel">
			{activeNavItem === "personal" && (
				<>
					<h1 className="title">Personal Information</h1>
					<PersonalForm data={data} setData={setData}></PersonalForm>
				</>
			)}
			{activeNavItem === "education" && (
				<>
					<h1 className="title">Education</h1>
					{formsState.education.isActive ? (
						<EducationForm
							formId={formsState.education.id}
							data={data}
							setData={setData}
							setFormsState={setFormsState}
							isNewForm={formsState.education.isNewForm}
						></EducationForm>
					) : (
						<>
							<EntriesList
								section={activeNavItem}
								data={data}
								setData={setData}
								setFormsState={setFormsState}
							></EntriesList>
							<button
								className="addBtn"
								onClick={() => {
									handleAddEntry("education");
								}}
							>
								+ Add Education
							</button>
						</>
					)}
				</>
			)}
			{activeNavItem === "work" && (
				<>
					<h1 className="title">Work Experience</h1>
					{formsState.work.isActive ? (
						<ExperienceForm
							formId={formsState.work.id}
							data={data}
							setData={setData}
							setFormsState={setFormsState}
							isNewForm={formsState.work.isNewForm}
						></ExperienceForm>
					) : (
						<>
							<EntriesList
								section={activeNavItem}
								data={data}
								setData={setData}
								setFormsState={setFormsState}
							></EntriesList>
							<button className="addBtn" onClick={() => handleAddEntry("work")}>
								+ Add Work Experience
							</button>
						</>
					)}
				</>
			)}
			{activeNavItem === "projects" && (
				<>
					<h1 className="title">Projects</h1>
					{formsState.projects.isActive ? (
						<ProjectForm
							formId={formsState.projects.id}
							data={data}
							setData={setData}
							setFormsState={setFormsState}
							isNewForm={formsState.projects.isNewForm}
						></ProjectForm>
					) : (
						<>
							<EntriesList
								section={activeNavItem}
								data={data}
								setData={setData}
								setFormsState={setFormsState}
							></EntriesList>
							<button
								className="addBtn"
								onClick={() => handleAddEntry("projects")}
							>
								+ Add Project
							</button>
						</>
					)}
				</>
			)}
			{activeNavItem === "skills" && (
				<>
					<h1 className="title">Technical Skills</h1>
					<SkillsForm data={data} setData={setData}></SkillsForm>
				</>
			)}
			{activeNavItem === "interests" && (
				<>
					<h1 className="title">Interests</h1>
					<InterestsForm data={data} setData={setData}></InterestsForm>
				</>
			)}
			{activeNavItem === "languages" && (
				<>
					<h1 className="title">Langugages</h1>
					<LanguagesForm data={data} setData={setData}></LanguagesForm>
				</>
			)}
		</div>
	);
}

function EntriesList({ section, data, setData, setFormsState }) {
	const handleDelete = (id) => {
		setData((prevData) => ({
			...prevData,
			[section]: prevData[section].filter((entry) => entry.id !== id),
		}));
	};

	return (
		<div className="entriesWrapper">
			{data[section].map((entry) => (
				<div className="entry" key={entry.id}>
					<button
						className="entryBtn"
						onClick={() =>
							setFormsState((prevState) => ({
								...prevState,
								[section]: { isActive: true, id: entry.id, isNewForm: false },
							}))
						}
					>
						{entry.schoolName || entry.projectName || entry.company}
					</button>
					<button className="deleteBtn" onClick={() => handleDelete(entry.id)}>
						<img src={bin} alt="Delete" />
					</button>
				</div>
			))}
		</div>
	);
}

export default Sidepanel;
