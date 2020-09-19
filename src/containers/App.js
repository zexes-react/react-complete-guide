import React, {Component} from 'react';

import classes from './App.css';
import Persons from "../components/Persons/Persons"
import '../components/Persons/Person/Person.css'
import Cockpit from '../components/Cockpit/Cockpit'


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

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p => {
            return p.id === id;
        }));

        const person = {...this.state.persons[personIndex]};

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
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
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        }

        return (

            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>

                {persons}
            </div>

        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;