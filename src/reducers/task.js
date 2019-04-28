
import _ from 'lodash';

//==================================
//reducers
//==================================


const initialState = {
    todos: [{
        id: '01',
        text: 'aaaaa',
        isDone: false
    },
    {
        id: '02',
        text: 'aaaサンプルタスク',
        isDone: false
    },
    {
        id: '03',
        text: 'aacサンプルタスク',
        isDone: false
    }],
    searchText: ''
}



export default function task(state = initialState, action) {

    switch(action.type) {
        case 'ADD':

            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text:action.text,
                        isDone: false
                    }
                ]
            }
        case 'DELETE':

            let filterTodos = _.reject(state.todos, {
                id: action.id
            });

            return Object.assign({}, state, {todos: filterTodos});

        case 'UPDATE':

            return Object.assign({}, state,  {
                todos: _.map(state.todos, (todo) => {
                    if(todo.id === action.id) {
                        return Object.assign({}, todo, {text: action.text})
                    } return todo;
                })
            });


        case 'TOGGLE_DONE':

            let toggleTodos = _.map(state.todos, (todo) => {
                if(todo.id === action.id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        isDone: !todo.isDone
                    }
                } return todo;
            })

            return {
                todos: toggleTodos,
                searchText: state.searchText
            }

        case 'SEARCH':

            return {
                todos: [...state.todos],
                searchText: action.searchText
            }
        default:
            return state;
    }
}
