import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from "../../../hoc/withClass";
import classes from './Person.css'


class Person extends Component  {
    render() {
        console.log('[Person.js] rendering...');
        const rnd = Math.random();
        if(rnd === 0.7){
            throw  new Error("Something went wrong");
        }
        return (
            <Auxiliary>
            <p key="i1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} year old!</p>
            <p key='i2'>{this.props.children}</p>
            <input key='i3' type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);