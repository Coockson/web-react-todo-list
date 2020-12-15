import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import React from 'react';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import { GlobalProvider } from './context/GlobalState';


function App() {
	return (
		<Router>
			<GlobalProvider>
			<div className="App">
				<div className="container">
					<Header/>
					<Route exact path="/" render={props => (
						<React.Fragment>
							<AddTodo/>
							<Todos/>
						</React.Fragment>
					)} />

					<Route path="/about" component={About} />
					
				</div>	 
			</div>
			</GlobalProvider>
		</Router>			
	);
}

export default App;