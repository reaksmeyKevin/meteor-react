import React, {Component, PropTypes} from 'react';
import Todo from './todo';
import {Todos} from '../api/todo.js';
import {createContainer} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor';

export default class AppHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 5
        }
    }
    render() {
        return (<Container limit={this.state.limit}/>)
    }
}

class App extends Component {
    renderTask() {
        return this
            .props
            .todos
            .map((todo) => (<Todo key={todo._id} todo={todo}/>))
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>
                <ul className="collection">
                    {this.renderTask()}
                </ul>
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired
}
let Container = createContainer((props) => {
    const handle = Meteor.subscribe('todos', {
        selector: {},
        limit: props.limit
    });
    const todos = Todos
        .find({})
        .fetch();
    return {todos: todos};
}, App)