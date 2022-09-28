import { useState } from "react";
import { IEmployee } from "../../types";
import "./styles.scss";

interface IAddEmployeeBlockProps {
	addEmployee: (newEmployee: IEmployee) => void;
};

export const AddEmployeeBlock = (props: IAddEmployeeBlockProps) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
	const [warningMessage, setWarningMessage] = useState<boolean>(false);

	const addButtonIsDisabled = () => Boolean(JSON.parse(localStorage.getItem("employees") as string).length > 4);

	const addEmployee = () => {
		if (name.length || surname.length) {
			const newEmployee = { name, surname, id: `${Math.floor(Math.random() * 10000)}_${surname}_${name}` };
			props.addEmployee(newEmployee);
			warningMessage && setWarningMessage(false);
		} else {
			setWarningMessage(true);
		};
	};

	return (
		<div className="add-employee-block">
			<div className="form">
				<input 
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
        <input
					type="text"
					value={surname}
					onChange={e => setSurname(e.target.value)}
				/>
			</div>
			<button disabled={addButtonIsDisabled()} onClick={addEmployee}>Add</button>
			{warningMessage && (
				<div className="warning">Name and surname can not be empty!</div>
			)}
		</div>
	);
};