import Navbar from "./Navbar.jsx";
import Sidepanel from "./Sidepanel.jsx";
import { useState } from "react";

function Editor() {
	const [activeNavItem, setActiveNavItem] = useState("education");
	const [isAddingNewEntry, setIsAddingNewEntry] = useState(false);
	const handleNavChange = (selected) => {
		setActiveNavItem(selected);
		setIsAddingNewEntry(false);
	};
	const isAddingNewEntryToggle = () => {
		setIsAddingNewEntry(!isAddingNewEntry);
	};
	return (
		<>
			<Navbar
				activeNavItem={activeNavItem}
				onNavChange={handleNavChange}
			></Navbar>
			<Sidepanel
				activeNavItem={activeNavItem}
				isAddingNewEntry={isAddingNewEntry}
				handleIsAddingNewEntryState={isAddingNewEntryToggle}
			></Sidepanel>
		</>
	);
}

export default Editor;
