export default function ProjectForm({
	formId,
	data,
	setData,
	setFormsState,
	isNewForm,
}) {
	const getValue = (propertyName) => {
		return data.projects.find((entry) => entry.id === formId)?.[propertyName];
	};

	const handleInfoChange = (propertyName, value) => {
		setData((prevData) => ({
			...prevData,
			projects: prevData.projects.map((entry) =>
				entry.id === formId ? { ...entry, [propertyName]: value } : entry
			),
		}));
	};

	const handleDelete = () => {
		setData((prevData) => ({
			...prevData,
			projects: prevData.projects.filter((entry) => entry.id !== formId),
		}));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setFormsState((prevState) => ({
					...prevState,
					projects: { isActive: false, id: "", isNewForm: false },
				}));
			}}
		>
			<div className="formWrapper">
				<div className="inputField">
					<label htmlFor="projectNameInput">
						Project Name <span className="required">*</span>
					</label>
					<input
						id="projectNameInput"
						type="text"
						required
						value={getValue("projectName")}
						onChange={(e) => handleInfoChange("projectName", e.target.value)}
					/>
				</div>

				<div className="inputAreaField">
					<label htmlFor="descriptionInput">Description</label>
					<textarea
						id="descriptionInput"
						value={getValue("description")}
						onChange={(e) => handleInfoChange("description", e.target.value)}
					/>
				</div>

				<div className="formBtns">
					<button
						className="cancelBtn"
						type="reset"
						onClick={() => {
							handleDelete();
							setFormsState((prevState) => ({
								...prevState,
								projects: { isActive: false, id: "", isNewForm: false },
							}));
						}}
					>
						{isNewForm ? "Cancel" : "Delete"}
					</button>
					<button className="saveBtn" type="submit">
						Save
					</button>
				</div>
			</div>
		</form>
	);
}
