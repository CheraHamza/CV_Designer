import Preview from "./preview/Preview.jsx";
import Editor from "./cv-editor/Editor.jsx";
import { saveData, loadData } from "../data.js";
import { useState } from "react";

function App() {
	const [data, setData] = useState(loadData);

	window.addEventListener("beforeunload", () => {
		saveData(data);
	});

	return (
		<>
			<Editor data={data} setData={setData}></Editor>
			<Preview data={data}></Preview>
		</>
	);
}

export default App;
