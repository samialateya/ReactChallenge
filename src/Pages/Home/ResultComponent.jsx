import { useEffect } from "react";
import { useContext } from 'react';
import { DataContext } from '../../Store/DataContext';
import { useState } from 'react';

export function ResultComponent() {
	//get rows from state manager
	const [rows] = useContext(DataContext);
	//get result from state manager
	const [sum, setSum] = useState(0);
	//calculate result whenever rows array changes
	useEffect(() => {
		let result = 0;
		rows.forEach(row => {
			if (row.isActive && !isNaN(parseFloat(row.number))) {
				result += (row.operator === '+') ? parseInt(row.number) : -parseInt(row.number);
			}
		});
		setSum(result);
	}, [rows]);
	
	return (
		<footer className="card-footer d-flex">
			<h5 className="m-0">Result : {sum}</h5>
		</footer>
	)
}
