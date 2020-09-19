import React, {Component} from 'react';

import classes from './Person.css'


class Person extends Component  {
    render() {
        console.log('[Person.js] rendering...');
        const rnd = Math.random();
        if(rnd === 0.7){
            throw  new Error("Something went wrong");
        }
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} year old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>)
    }
}


export default Person;