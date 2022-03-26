import { createContext } from 'react';
import { useState } from 'react';
import App from '../App';

export const DataContext = createContext();

export const DataProvider = () => {
	//instantiate state manager to save numbers with default values
	const [rows, setRow] = useState([
		{
			operator: '+',
			number: 4,
			isActive: true
		},
		{
			operator: '-',
			number: 2,
			isActive: true
		}
	]);
	return (
		<DataContext.Provider value={[rows, setRow]}>
			<App />
		</DataContext.Provider>
	)	
};


