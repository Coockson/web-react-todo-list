import './App.css';
import Todos from './components/Todos'
import React from 'react';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { GlobalProvider } from './context/GlobalState';


function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<div className="container">
					<Header/>
					<AddTodo/>
					<Todos/>
				</div>	 
			</div>
		</GlobalProvider>		
	);
}

export default App;