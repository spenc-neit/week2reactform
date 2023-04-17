import { useState } from "react";
import { useEffect } from "react";
function Form(props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [emailErrorText, setEmailErrorText] = useState("");
	const [fNameErrorText, setFNameErrorText] = useState("");
	const [lNameErrorText, setLNameErrorText] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [isFNameOK, setFNameOK] = useState(false);
	const [isLNameOK, setLNameOK] = useState(false);
	const [isEmailOK, setEmailOK] = useState(false);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		if (event.target.value.length < 8) {
			setEmailErrorText("Email must be at least 8 characters.");
			setEmailOK(false);
		} else {
			setEmailErrorText("");
			setEmailOK(true);
		}
	};

	const handleFNameChange = (event) => {
		setFirstName(event.target.value);
		if (event.target.value.trim().length == 0) {
			setFNameErrorText("First name is required.");
			setFNameOK(false);
		} else {
			setFNameErrorText("");
			setFNameOK(true);
		}
	};

	const handleLNameChange = (event) => {
		setLastName(event.target.value);
		if (event.target.value.trim().length == 0) {
			setLNameErrorText("Last name is required.");
			setLNameOK(false);
		} else {
			setLNameErrorText("");
			setLNameOK(true);
		}
	};

	const clearForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
	};

	const submit = () => {
		clearForm();
		props.handleToggleForm();
	};

	useEffect(() => {
		if (isFNameOK && isLNameOK && isEmailOK) {	
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	});

	return (
		<div className="container">
			<br />
			<label className="form-label">First Name:&nbsp;</label>
			<input type="text" value={firstName} onChange={handleFNameChange} />
			<p className="error">{fNameErrorText}</p>

			<br />
			<label className="form-label">Last Name:&nbsp;</label>
			<input type="text" value={lastName} onChange={handleLNameChange} />
			<p className="error">{lNameErrorText}</p>

			<br />
			<label className="form-label">Email:&nbsp;</label>
			<input type="email" value={email} onChange={handleEmailChange} />
			<p className="error">{emailErrorText}</p>
			{emailErrorText == "" ? <br /> : ""}

			<button onClick={clearForm} className="button">
				Clear
			</button>

			<button onClick={submit} disabled={disabled} className="button">
				Submit
			</button>
		</div>
	);
}

export default Form;
