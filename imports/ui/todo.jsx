import React, {Component, PropTypes} from 'react';

export default class Todo extends Component {
    render() {
        return (
            <li className="collection-item">
                {this.props.todo.text}
            </li>
        )
    }

}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}
