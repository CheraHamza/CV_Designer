export default function EducationForm({
	formId,
	data,
	setData,
	setFormsState,
	isNewForm,
}) {
	const getValue = (propertyName) => {
		return (
			data.education.find((entry) => entry.id === formId)?.[propertyName] || ""
		);
	};

	const handleInfoChange = (propertyName, value) => {
		setData((prevData) => ({
			...prevData,
			education: prevData.education.map((entry) =>
				entry.id === formId ? { ...entry, [propertyName]: value } : entry
			),
		}));
	};

	const handleDelete = () => {
		setData((prevData) => ({
			...prevData,
			education: prevData.education.filter((entry) => entry.id !== formId),
		}));
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setFormsState((prevState) => ({
					...prevState,
					education: { isActive: false, id: "", isNewForm: false },
				}));
			}}
		>
			<div className="formWrapper">
				<div className="inputField">
					<label htmlFor="schoolNameInput">
						School Name <span className="required">*</span>
					</label>
					<input
						id="schoolNameInput"
						type="text"
						required
						value={getValue("schoolName")}
						onChange={(e) => handleInfoChange("schoolName", e.target.value)}
					/>
				</div>
				<div className="inputField">
					<label htmlFor="degreeInput">Degree</label>
					<input
						id="degreeInput"
						type="text"
						value={getValue("degree")}
						onChange={(e) => handleInfoChange("degree", e.target.value)}
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
					<label htmlFor="locationInput">City</label>
					<input
						id="locationInput"
						type="text"
						value={getValue("location")}
						onChange={(e) => handleInfoChange("location", e.target.value)}
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
								education: { isActive: false, id: "", isNewForm: false },
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
