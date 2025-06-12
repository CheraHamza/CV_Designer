export default function SkillsForm({ data, setData }) {
	const handleInfoChange = (e) => {
		const newValue = e.target.value.split(", ");

		setData({ ...data, skills: newValue });
	};

	return (
		<form>
			<div className="formWrapper">
				<div className="inputAreaField">
					<label htmlFor="skillsInput">Skills</label>
					<textarea
						id="skillsInput"
						value={data.skills.join(", ")}
						onChange={handleInfoChange}
					></textarea>
				</div>
			</div>
		</form>
	);
}
