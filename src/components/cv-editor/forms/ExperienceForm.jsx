export default function ExperienceForm({
	formId,
	data,
	setData,
	setFormsState,
	isNewForm,
}) {
	const getValue = (propertyName) => {
		return data.work.find((entry) => entry.id === formId)?.[propertyName];
	};

	const handleInfoChange = (propertyName, value) => {
		setData((prevData) => ({
			...prevData,
			work: prevData.work.map((entry) =>
				entry.id === formId ? { ...entry, [propertyName]: value } : entry
			),
		}));
	};

	const handleDelete = () => {
		setData((prevData) => ({
			...prevData,
			work: prevData.work.filter((entry) => entry.id !== formId),
		}));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setFormsState((prevState) => ({
					...prevState,
					work: { isActive: false, id: "", isNewForm: false },
				}));
			}}
		>
			<div className="formWrapper">
				<div className="inputField">
					<label htmlFor="companyInput">
						Company Name <span className="required">*</span>
					</label>
					<input
						id="companyInput"
						type="text"
						required
						value={getValue("company")}
						onChange={(e) => handleInfoChange("company", e.target.value)}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="jobInput">Job Title</label>
					<input
						id="jobInput"
						type="text"
						value={getValue("job")}
						onChange={(e) => handleInfoChange("job", e.target.value)}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="startDateInput">Start Date</label>
					<input
						id="startDateInput"
						type="text"
						value={getValue("startDate")}
						onChange={(e) => handleInfoChange("startDate", e.target.value)}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="endDateInput">End Date</label>
					<input
						id="endDateInput"
						type="text"
						value={getValue("endDate")}
						onChange={(e) => handleInfoChange("endDate", e.target.value)}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="locationInput">Location</label>
					<input
						id="locationInput"
						type="text"
						value={getValue("location")}
						onChange={(e) => handleInfoChange("location", e.target.value)}
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
								work: { isActive: false, id: "", isNewForm: false },
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
