import { useContext } from "react";
import { DataContext } from "../../Store/DataContext";

export function NumbersComponent() {
	//get rows from state manager
	const [rows, setRow] = useContext(DataContext);
	//toggle row active state
	function changeRowState(index) {
		rows[index].isActive = !rows[index].isActive;
		setRow([...rows]);
	}
	//switch operator '+' or '-' in row
	function changeOperator(event, index) {
		rows[index].operator = event.target.value;
		setRow([...rows]);
	}
	//catch number changing
	function changeNumber(event, index) {
		rows[index].number = event.target.value;
		setRow([...rows]);
	}
	//delete row
	function deleteRow(index) {
		rows.splice(index, 1);
		setRow([...rows]);
	}
	//render delete button if the rows array contains more than tow row
	function renderDeleteBtn(row,index) {
		if (rows.length > 2) {
			return (
				<button className="btn btn-danger" disabled={!row.isActive} onClick={() => deleteRow(index)}>Delete</button>
			)
		}
	}
	
	return (
		rows.map((row, index) =>
			<section key={index} className="mb-2">
				<div className="form-group d-flex gap-2">
					<select className="form-select w-auto" value={row.operator} disabled={!row.isActive} onChange={(event) => changeOperator(event, index)}>
						<option value="+">+</option>
						<option value="-">-</option>
					</select>
					<input type="number" className="form-control" placeholder="Enter a number" value={row.number} disabled={!row.isActive} onChange={(event) => changeNumber(event, index)}/>
					{renderDeleteBtn(row,index)}
					<button className="btn btn-secondary" onClick={() => changeRowState(index)}>Disable</button>
				</div>
			</section >
		)
	)
}
