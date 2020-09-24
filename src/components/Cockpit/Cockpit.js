import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props)=> {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)

    useEffect(() =>{
        console.log('[cockpit.js] useEffect, bundles all class hooks as one, hence runs for every render cycle of cockpit');
        //combo: componentDidMount + componentDidUpdate
        //Http Request...
        toggleBtnRef.current.click();

        return () => console.log('[cockpit.js] cleanup work \n runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle!');
    }, []);
    //conditioned to run when persons change i.e the optional argument passed [props.persons],
    // we can pass in as many dependency as required here
    // if we want to run once, pass an empty array []
    //note we can call use effects as many times as we need it for the changes we need

    useEffect((() => {
        console.log('[cockpit.js] 2nd useEffect');
        return (() => {
            console.log('[cockpit.js] clean up work in 2nd useEffect'); // optional
            });
    }));

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
        <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons
        </button>
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
