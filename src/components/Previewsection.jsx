import cv from "../../public/CV.svg";
import '../styles/Previewsection.css'

function Previewsection() {
	return (
		<div className="previewSection">
			<img src={cv} alt="cv" />
		</div>
	);
}

export default Previewsection;
