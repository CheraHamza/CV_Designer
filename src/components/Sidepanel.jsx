import img_placeholder_bg from "/img_holder.svg";
import "../styles/Sidepanel.css";

function Sidepanel({
	activeNavItem,
	isAddingNewEntry,
	handleIsAddingNewEntryState,
}) {
	return (
		<div className="sidepanel">
			{activeNavItem === "personal" && (
				<>
					<h1 className="title">Personal Information</h1>
					<ImagePicker img={img_placeholder_bg}></ImagePicker>
					<Form selectedNavItem={"personal"}></Form>
				</>
			)}
			{activeNavItem === "education" && (
				<>
					<h1 className="title">Education</h1>
					{isAddingNewEntry === false && (
						<ActionBtn
							className={"addBtn educationBtn"}
							text={"+ Add Education"}
							handleClick={handleIsAddingNewEntryState}
						></ActionBtn>
					)}
					{isAddingNewEntry === true && (
						<>
							<Form selectedNavItem={activeNavItem}></Form>
							<div className="actionBtnsWrapper">
								<ActionBtn
									className={"cancelBtn"}
									text={"Cancel"}
									handleClick={handleIsAddingNewEntryState}
								></ActionBtn>
								<ActionBtn
									className={"saveBtn"}
									text={"Save"}
									handleClick={""}
								></ActionBtn>
							</div>
						</>
					)}
				</>
			)}
			{activeNavItem === "work" && (
				<>
					<h1 className="title">Work Experience</h1>
					{isAddingNewEntry === false && (
						<ActionBtn
							className={"addBtn workBtn"}
							text={"+ Add Work Experience"}
							handleClick={handleIsAddingNewEntryState}
						></ActionBtn>
					)}
					{isAddingNewEntry === true && (
						<>
							<Form selectedNavItem={activeNavItem}></Form>
							<div className="actionBtnsWrapper">
								<ActionBtn
									className={"cancelBtn"}
									text={"Cancel"}
									handleClick={handleIsAddingNewEntryState}
								></ActionBtn>
								<ActionBtn
									className={"saveBtn"}
									text={"Save"}
									handleClick={""}
								></ActionBtn>
							</div>
						</>
					)}
				</>
			)}
			{activeNavItem === "projects" && (
				<>
					<h1 className="title">Projects</h1>
					{isAddingNewEntry === false && (
						<ActionBtn
							className={"addBtn projectsBtn"}
							text={"+ Add Project"}
							handleClick={handleIsAddingNewEntryState}
						></ActionBtn>
					)}
					{isAddingNewEntry === true && (
						<>
							<Form selectedNavItem={activeNavItem}></Form>
							<div className="actionBtnsWrapper">
								<ActionBtn
									className={"cancelBtn"}
									text={"Cancel"}
									handleClick={handleIsAddingNewEntryState}
								></ActionBtn>
								<ActionBtn
									className={"saveBtn"}
									text={"Save"}
									handleClick={""}
								></ActionBtn>
							</div>
						</>
					)}
				</>
			)}
			{activeNavItem === "skills" && (
				<>
					<h1 className="title">Technical Skills</h1>
					<Form selectedNavItem={"skills"}></Form>
				</>
			)}
			{activeNavItem === "interests" && (
				<>
					<h1 className="title">Interests</h1>
					<Form selectedNavItem={"interests"}></Form>
				</>
			)}
			{activeNavItem === "languages" && (
				<>
					<h1 className="title">Langugages</h1>
					<Form selectedNavItem={"languages"}></Form>
				</>
			)}
		</div>
	);
}

function Form({ selectedNavItem }) {
	return (
		<div className="form">
			{selectedNavItem === "personal" && (
				<>
					<Input label={"First Name"} type={"text"}></Input>
					<Input label={"Last Name"} type={"text"}></Input>
					<Input label={"Email"} type={"email"}></Input>
					<Input label={"Phone Number"} type={"tele"}></Input>
					<Input label={"Location"} type={"text"}></Input>
					<TextArea label={"Bio"}></TextArea>
				</>
			)}
			{selectedNavItem === "education" && (
				<>
					<Input label={"School Name"} type={"text"}></Input>
					<Input label={"Degree"} type={"text"}></Input>
					<Input label={"Start Date"} type={"text"}></Input>
					<Input label={"End Date"} type={"text"}></Input>
					<Input label={"Location"} type={"text"}></Input>
				</>
			)}
			{selectedNavItem === "work" && (
				<>
					<Input label={"Company"} type={"text"}></Input>
					<Input label={"Job Title"} type={"text"}></Input>
					<Input label={"Start Date"} type={"text"}></Input>
					<Input label={"End Date"} type={"text"}></Input>
					<Input label={"Location"} type={"text"}></Input>
					<TextArea label={"Description"}></TextArea>
				</>
			)}
			{selectedNavItem === "projects" && (
				<>
					<Input label={"Project Name"} type={"text"}></Input>
					<TextArea label={"Description"}></TextArea>
				</>
			)}
			{selectedNavItem === "skills" && (
				<>
					<TextArea label={"Skills"}></TextArea>
				</>
			)}
			{selectedNavItem === "interests" && (
				<>
					<TextArea label={"Interests"}></TextArea>
				</>
			)}
			{selectedNavItem === "languages" && (
				<>
					<TextArea label={"Languages"}></TextArea>
				</>
			)}
		</div>
	);
}

function Input({ label, type }) {
	return (
		<>
			<label>
				{label}
				<input type={type} />
			</label>
		</>
	);
}

function TextArea({ label }) {
	return (
		<>
			<label>
				{label}
				<textarea></textarea>
			</label>
		</>
	);
}

function ImagePicker({ img }) {
	return (
		<div className="imgPicker">
			<div>
				<button className="changebtn">Change</button>
				<span>|</span>
				<button className="deletebtn">Delete</button>
			</div>
			<img src={img} alt="profile picture" />
		</div>
	);
}

function ActionBtn({ className, text, handleClick }) {
	return (
		<button className={className} onClick={handleClick}>
			{text}
		</button>
	);
}

export default Sidepanel;
