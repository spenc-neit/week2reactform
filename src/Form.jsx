import { useState } from "react";
function Form(){
    const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [eError, setEError] = useState(""); //emailErrorMessage, setEmailErrorMessage
	const [disabled, setDisabled] = useState(true);

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
		if (event.target.value.length < 8) {
			setEError("Email must be at least 8 characters.");
			setDisabled(true);
		} else {
			setEError("");
			setDisabled(false);
		}
	};

	const clearForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
	};

    const submit = () =>{
        setFirstName("");
		setLastName("");
		setEmail("");
    }

	return (
		<div className="container">
			<label className="form-label">First Name</label>
			<small>&nbsp;{firstName}</small>

			<input
				type="text"
				value={firstName}
				onChange={(event) => setFirstName(event.target.value)}
				required
			/>

			<br />
			<label className="form-label">Last Name</label>
			<small>&nbsp;{lastName}</small>
			<input
				type="text"
				value={lastName}
				onChange={(event) => setLastName(event.target.value)}
			/>

			<br />
			<label className="form-label">Email</label>
			<small>&nbsp;{email}</small>
			<script>console.log({`${email}`})</script>
			<input type="email" value={email} onChange={handleEmailChange} />
			<p className="error">{eError}</p>
            <button onClick={clearForm} className="button">
				Clear
			</button>
			<button onClick={submit} disabled={disabled} className="button">
				Submit
			</button>
		</div>
	);
}

export default Form