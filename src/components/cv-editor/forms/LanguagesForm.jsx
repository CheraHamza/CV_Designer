export default function LanguagesForm({ data, setData }) {
	const handleInfoChange = (e) => {
		const newValue = e.target.value.split(", ");

		setData({ ...data, languages: newValue });
	};

	return (
		<form>
			<div className="formWrapper">
				<div className="inputAreaField">
					<label htmlFor="languagesInput">Languages</label>
					<textarea
						id="languagesInput"
						value={data.languages.join(", ")}
						onChange={handleInfoChange}
					></textarea>
				</div>
			</div>
		</form>
	);
}
