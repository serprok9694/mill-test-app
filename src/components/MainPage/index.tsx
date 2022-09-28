import React from 'react';
import { Table } from '../Table';
import './styles.scss';

export const MainPage = () => (
	<div className="main-page">
		<div className="header" />
		<div className="main">
			<div className="block">
				<div className="rectangle-wrapper">
					<div className="rectangle" />
				</div>
			</div>
			<div className="table-wrapper">
				<div>Employees</div>
				<Table />
			</div>
		</div>
		<div className="footer" />
	</div>
);