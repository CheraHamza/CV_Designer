export default function InterestsForm({ data, setData }) {
	const handleInfoChange = (e) => {
		const newValue = e.target.value.split(", ");

		setData({ ...data, interests: newValue });
	};

	return (
		<form>
			<div className="formWrapper">
				<div className="inputAreaField">
					<label htmlFor="interestsInput">Interests</label>
					<textarea
						id="interestsInput"
						value={data.interests.join(", ")}
						onChange={handleInfoChange}
					></textarea>
				</div>
			</div>
		</form>
	);
}
