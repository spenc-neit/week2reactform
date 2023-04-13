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

	const handleHide = () => {
		setShowForm(false);
	};

	const form = showForm ? <Form /> : null;
	console.log(form)

	return (
		<>
		<button className="btn" onClick={showForm ? handleHide : handleShow}>
			Toggle Form Visibility
		</button>
		{form}
		</>
	);
}

export default App;
