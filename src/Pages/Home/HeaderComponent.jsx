import { useContext } from 'react';
import { DataContext } from '../../Store/DataContext';


export function HeaderComponent() {
	const [rows, setRow] = useContext(DataContext);
	
	function addRow() {
		//push new row to rows array in state manager
		setRow([...rows, {
			operator: '+',
			number: 0,
			isActive: true
		}]);
	}
	return (
		<header className="card-title d-flex justify-content-between">
			<h5>Calculate with me</h5>
			<button className="btn btn-primary" onClick={() => addRow()}>Add Row</button>
		</header>
	)
}
