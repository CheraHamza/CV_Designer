import Navbar from "./Navbar.jsx";
import Sidepanel from "./Sidepanel.jsx";
import "../../styles/editor.css";
import { useState } from "react";

function Editor({ data, setData }) {
	const [activeNavItem, setActiveNavItem] = useState("personal");
	const handleNavChange = (selected) => {
		setActiveNavItem(selected);
	};

	return (
		<>
			<Navbar
				activeNavItem={activeNavItem}
				onNavChange={handleNavChange}
			></Navbar>
			<Sidepanel
				activeNavItem={activeNavItem}
				data={data}
				setData={setData}
			></Sidepanel>
		</>
	);
}

export default Editor;
