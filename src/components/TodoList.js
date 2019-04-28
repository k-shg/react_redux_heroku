import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class TodoList extends React.Component {

    handleRemove(id) {
        console.log('TodoListのremove');
    }

    render() {

        const {onClickToggleDone, onClickRemove, onEnterUpdateTask, todos} = this.props;

        let tasks = [];

        for (let index in todos) {
            tasks.push(
                <Task
                    key={todos[index].id}
                    {...todos[index]}
                    onClickRemove={() => {onClickRemove(todos[index].id)} }
                    onEnterUpdateTask={(text) => {onEnterUpdateTask(todos[index].id, text)}}
                    onClickToggleDone={(id) => {onClickToggleDone(id)} }
                    />);
        }
        return (<ul className="list js-todo_list">
            {tasks.reverse()}
        </ul>);
    }
}

TodoList.propTypes = {
    onClickToggleDone: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    onEnterUpdateTask: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    })).isRequired
}
export default TodoList
