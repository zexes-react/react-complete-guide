// import React, { Component } from 'react';
import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {

  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age:  26}
    ]
  });

  const [otherState, setOtherState] = useState('some random value')

  const switchNameHandler = () => {
  // console.log('Was clicked!')
  // DON'T DO THIS: this.state.persons[0].name = 'Ezekiel'
    setPersonsState({persons: [
      { name: 'Ezekiel', age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age:  30}
    ]})
};

    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
          <p>This is really working</p>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
          <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
          <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;

// class App extends Component {
// render() {
// state = {
//   persons: [
//     { name: 'Max', age:28 },
//     { name: 'Manu', age:29 },
//     { name: 'Stephanie', age:  26}
//   ]
// }
//

