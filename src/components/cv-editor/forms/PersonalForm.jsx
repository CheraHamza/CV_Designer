import imgPlaceholder from "/img_holder.svg";

export default function PersonalForm({ data, setData }) {
	const handleInfoChange = (propertyName, value) => {
		setData({ ...data, personal: { ...data.personal, [propertyName]: value } });
	};

	const handlePictureChange = (file) => {
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setData({
					...data,
					personal: { ...data.personal, picture: reader.result },
				});
			};
			reader.readAsDataURL(file);
		} else {
			setData({
				...data,
				personal: { ...data.personal, picture: imgPlaceholder },
			});
		}
	};

	return (
		<form>
			<div className="pictureChooserWrapper">
				<label
					htmlFor="pictureInput"
					className="custom-file-upload"
					title="Click to Change"
				>
					<img
						className="profilePicturePreview"
						src={data.personal.picture}
						alt="Profile Preview"
					/>
				</label>
				<input
					id="pictureInput"
					type="file"
					accept="image/*"
					onChange={(e) => handlePictureChange(e.target.files[0])}
				/>
			</div>

			<div className="formWrapper">
				<div className="inputField">
					<label htmlFor="firstNameInput">First Name</label>
					<input
						id="firstNameInput"
						type="text"
						onChange={(e) => handleInfoChange("firstName", e.target.value)}
						value={data.personal.firstName}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="lastNameInput">Last Name</label>
					<input
						id="lastNameInput"
						type="text"
						onChange={(e) => handleInfoChange("lastName", e.target.value)}
						value={data.personal.lastName}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="emailInput">Email</label>
					<input
						id="emailInput"
						type="text"
						onChange={(e) => handleInfoChange("email", e.target.value)}
						value={data.personal.email}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="phoneInput">Phone Number</label>
					<input
						id="phoneInput"
						type="text"
						onChange={(e) => handleInfoChange("phoneNumber", e.target.value)}
						value={data.personal.phoneNumber}
					/>
				</div>

				<div className="inputField">
					<label htmlFor="locationInput">Location</label>
					<input
						id="locationInput"
						type="text"
						onChange={(e) => handleInfoChange("location", e.target.value)}
						value={data.personal.location}
					/>
				</div>

				<div className="inputAreaField">
					<label htmlFor="bioTextArea">Bio</label>
					<textarea
						id="bioTextArea"
						onChange={(e) => handleInfoChange("bio", e.target.value)}
						value={data.personal.bio}
					></textarea>
				</div>
			</div>
		</form>
	);
}
