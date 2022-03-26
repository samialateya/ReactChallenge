import { NumbersComponent } from "./NumbersComponent";
import { ResultComponent } from "./ResultComponent";
import { HeaderComponent } from "./HeaderComponent";

export function GameComponent() {	
	return (
		<div className="card card-body flex-grow-0 w-100">
			<HeaderComponent />
			<hr />
			<NumbersComponent />
			<ResultComponent />
		</div>
	)
}
