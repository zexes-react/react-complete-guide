import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props)=> {
    useEffect(() =>{
        console.log('[cockpit.js] useEffect, bundles all class hooks as one, hence runs for every render cycle of cockpit');
        //combo: componentDidMount + componentDidUpdate
        //Http Request...
        setTimeout(() =>{
            alert('Saved data from the Cloud');
        }, 1000);
    }, []);
    //conditioned to run when persons change i.e the optional argument passed [props.persons],
    // we can pass in as many dependency as required here
    // if we want to run once, pass an empty array []
    //note we can call use effects as many times as we need it for the changes we need

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
     btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }


    return (
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        {/*this is inefficient, use the below*/}
        <button className={btnClass} onClick={props.clicked}>Toggle Persons
        </button>
    </div>
  );
};

export default cockpit;
