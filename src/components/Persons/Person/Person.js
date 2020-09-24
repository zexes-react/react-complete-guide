import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from "../../../hoc/withClass";
import classes from './Person.css'
import AuthContext from '../../../context/auth-context'


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        const rnd = Math.random();
        if (rnd === 0.7) {
            throw  new Error("Something went wrong");
        }
        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    {(context) =>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>
                <p key="i1" onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} year old!</p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3' type="text"
                       onChange={this.props.changed}
                       value={this.props.name}
                    // ref={(inputEl) => {this.inputElement =inputEl}}
                       ref={this.inputElementRef}
                />
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