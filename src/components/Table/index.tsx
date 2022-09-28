import { useEffect, useState } from "react";
import { IEmployee } from "../../types";
import { TableRow } from "../TableRow";
import { AddEmployeeBlock } from "../AddEmployeeBlock";

export const Table = () => {
	const storageEmployees = JSON.parse(localStorage.getItem("employees") as string);
	const [employees, setEmployees] = useState<IEmployee[]>(storageEmployees);

	const onAddEmployee = (newEmployee: IEmployee) => {
		const updatedEmployees = [...employees, newEmployee];
		setEmployees(updatedEmployees);
	};

	const onRemoveEmployee = (id: string) => {
		const updatedEmployees = employees.filter(employee => employee.id !== id);
		setEmployees(updatedEmployees);
	};

	useEffect(() => {
		localStorage.setItem("employees", JSON.stringify(employees));
	}, [employees]);

	return (
		<>
			<div className="table">
				{employees.length ? employees.map(employee => (
					<div key={employee.id}>
						<TableRow employee={employee} onRemoveEmployee={onRemoveEmployee} />
					</div>
				)) : null}
			</div>
			<AddEmployeeBlock addEmployee={onAddEmployee} />
		</>
	);
};