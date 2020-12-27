import React, { Component } from 'react';
import Profile from './components/profile/index';
import Timer from './components/timer/index';
import FormControl from './components/formControl/index';
import Render from './components/conditionalRender/render';
import TextBox from './components/textBox/index';
import './assets/sass/main.scss';

class App extends Component {
	state = {
		persons: [
			{id: 1, name: 'Rafikul', age: 26, textLength: ''},
			{id: 2, name: 'Najmul', age: 23, textLength: ''},
			{id: 3, name: 'Raju', age: 16, textLength: ''}
		],
		showDetails: false,
	}
	
	
	conditionalToggle = () => {
		const doesShow = this.state.showDetails;
		this.setState({
			showDetails: !doesShow
		});
	} 
	deletePersonHandler = (personeIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personeIndex, 1);
		this.setState({persons: persons});
	}

	nameChangeHandler = (event, id) => {
		const stringName = event.target.value;
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id;
		});
		const singlePerson = {
			...this.state.persons[personIndex]
		};
		singlePerson.name = event.target.value;
		singlePerson.textLength = stringName.length;
		const persons = [...this.state.persons];
		persons[personIndex] = singlePerson;
		this.setState({ persons: persons });
	}

	render() {
		let allPersons = null;
		if(this.state.showDetails){
			allPersons = (
				this.state.persons.map((person, index)=>{
					return <Render key={person.id} 
					click={() => this.deletePersonHandler(index)}
					change={(event) => this.nameChangeHandler(event, person.id)} 
					nameLength={person.textLength}
					name={person.name} 
					age={person.age}
					/>
				}) 
			);
		}

		return(
			<div className="App">
				<Profile />
				<hr/>
				<Timer />
				<hr/>
				<div className="divider"></div>
				<FormControl />
				<div className="divider"></div>
				{allPersons}
				<button onClick={this.conditionalToggle}>Toggole Button</button>
				<div className="divider"></div>
				<TextBox />
			</div>
		)
	};
}

export default App;
