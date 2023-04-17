import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from './Form';

function App() {
	const [showForm, setShowForm] = useState(false);

	const handleShow = () => {
		setShowForm(true);
	};

	const toggleForm = () => {
		setShowForm(!showForm);
	};

	const form = showForm ? <Form handleToggleForm={toggleForm} /> : null;
	console.log(form)

	return (
		<>
		<button className="btn" onClick={handleShow}>
			Show Form
		</button>
		{form}
		</>
	);
}

export default App;
