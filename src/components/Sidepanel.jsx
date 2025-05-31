import img_placeholder_bg from "../../public/img_holder.svg";
import "../styles/Sidepanel.css";

function Sidepanel() {
	return (
		<div className="sidepanel">
			<h1 className="title">Personal Information</h1>
			<ImagePicker img={img_placeholder_bg}></ImagePicker>
			<Form></Form>
		</div>
	);
}

function Form() {
	return (
		<div className="form">
			<Input label={"First Name"} type={"text"}></Input>
			<Input label={"Last Name"} type={"text"}></Input>
			<Input label={"Email"} type={"email"}></Input>
			<Input label={"Phone Number"} type={"tele"}></Input>
			<Input label={"Location"} type={"text"}></Input>
			<TextArea label={"Bio"}></TextArea>
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

export default Sidepanel;
