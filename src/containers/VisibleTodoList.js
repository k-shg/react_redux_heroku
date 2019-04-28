import {connect} from 'react-redux'
import {toggleDone, deleteTask, updateTask} from '../actions'
import TodoList from '../components/TodoList'

const filterTodos = function(element) {
    let reg = new RegExp('^' + this.searchText);
    return element.text.match(reg);
};


//propsに渡すstateを定義
const mapStateToProps = state => {
    
    let filterData = state.task.todos.filter(filterTodos, state.task);

    return {
        todos: (!state.task.searchText) ? state.task.todos: filterData
    }
}


//propsとして渡すイベントと、dispatchを関連づける
const mapDispatchToProps = dispatch => {
    return {
        onClickToggleDone: id => {
            dispatch(toggleDone(id));
        },
        onClickRemove: id => {
            dispatch(deleteTask(id));
        },
        onEnterUpdateTask: (id, text) => {
            dispatch(updateTask(id, text));
        }
    }
};



export default connect(mapStateToProps, mapDispatchToProps) (TodoList)
