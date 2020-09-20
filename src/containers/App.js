import React, {Component} from 'react';

import classes from './App.css';
import Persons from "../components/Persons/Persons"
import '../components/Persons/Person/Person.css'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] constructor, This runs 1st, you can initialize state here");
    }

    state = {
        persons: [
            {id: 'dasc', name: 'Max', age: 28},
            {id: 'asce', name: 'Manu', age: 29},
            {id: 'vwwv', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[App.js] getDerivedStateFromProps runs 2nd", props);
        return state;
    }

    componentDidMount() {
        console.log("[App.js] componentDidMount runs 4th ==>> You can run Http request here");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[App.js] shouldComponentUpdate RUNS ON STATE CHANGE");
        const someCondition = true;
        return someCondition;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[App.js] componentDidUpdate RUNS ON STATE CHANGE")
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
        console.log("[App.js] render -> runs 3rd");
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
        }

        return (

            <div className={classes.App}>
                <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
                {this.state.showCockpit
                    ? <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}/>
                    : null}

                {persons}
            </div>

        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
