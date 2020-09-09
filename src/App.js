import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: 'dasc', name: 'Max', age: 28},
            {id: 'asce', name: 'Manu', age: 29},
            {id: 'vwwv', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 26}
            ]
        })
    }

    deletePersonHandler = (personIndex) => {
       // const persons = this.state.persons.slice();//copying new Array
        const persons = [...this.state.persons];//copying new Array using spread
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}/>
                    })}
                </div>)
        }

        return (
            <div className="App">
                <h1>Hi, I'm a react App</h1>
                <p>This is really working</p>
                {/*this is inefficient, use the below*/}
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>

                {persons}
            </div>
        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
