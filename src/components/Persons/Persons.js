import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps runs 1st on update')
    //     return state
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate runs 2nd on update')
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked; //ensure u compare elements not pointers
    //     // condition will be ran to determine this. comparing nextProps n nextState
    //     //enable paint Highlighting in rendering, chrome or Edge
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate runs 3rd on update:::: ' +
            '-> we can get current user scrolling here and pass it to componentDidUpdate to effect it')
        return {message: 'snapshot!'};
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount:: things that should run before component is unmounted ==>  clean up work');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate runs 5th on update')
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...runs on creation render n runs 4th on Update');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
                        );
                    });
    }
}

export default Persons;