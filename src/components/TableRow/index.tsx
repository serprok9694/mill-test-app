import { useState } from "react";
import { IEmployee } from "../../types";
import "./styles.scss";

interface ITableRowProps {
	employee: IEmployee,
	onRemoveEmployee: (id: string) => void;
};

export const TableRow = (props: ITableRowProps) => {
  const [rowIsHovered, setRowIsHovered] = useState(false);
	return (
		<div className={`row ${rowIsHovered ? 'is-hovered' : ''}`}>
			<div>{props.employee.name} - {props.employee.surname}</div>
			<button
				onClick={() => props.onRemoveEmployee(props.employee.id)}
				onMouseEnter={() => setRowIsHovered(true)}
				onMouseLeave={() => setRowIsHovered(false)}
			>
				Remove
			</button>
		</div>
	);
};