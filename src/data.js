import imgPlaceholder from "/img_holder.svg";

const initData = {
	personal: {
		picture: imgPlaceholder,
		firstName: "Hamza",
		lastName: "Chera",
		email: "cherahamza1@gmail.com",
		phoneNumber: "+213 564 120 520",
		location: "Jijel, Algeria",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	education: [
		{
			id: crypto.randomUUID(),
			schoolName: "University Of Harvard",
			degree: "Bachelor in Computer Science",
			startDate: "2020",
			endDate: "2024",
			location: "Massachusetts, USA",
		},
		{
			id: crypto.randomUUID(),
			schoolName: "University Of Oxford",
			degree: "Master in Computer Science",
			startDate: "2024",
			endDate: "2026",
			location: "Oxford, England",
		},
	],
	work: [
		{
			id: crypto.randomUUID(),
			company: "Microsoft Corporation",
			job: "Junior Software Developer",
			startDate: "2018",
			endDate: "Present",
			location: "California",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			id: crypto.randomUUID(),
			company: "Google Corporation",
			job: "Web Analyst",
			startDate: "2005",
			endDate: "2018",
			location: "London",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	],
	projects: [
		{
			id: crypto.randomUUID(),
			projectName: "Weather App",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			id: crypto.randomUUID(),
			projectName: "CV Designer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	],
	skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Webpack"],
	interests: ["History", "Sports", "Art"],
	languages: ["English", "French", "Arabic"],
};

export function saveData(data) {
	localStorage.setItem("resumeData", JSON.stringify(data));
}

export function loadData() {
	const data = localStorage.getItem("resumeData");
	return data ? JSON.parse(data) : initData;
}
