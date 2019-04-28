import React from 'react';
import TodoCreater from  './TodoCreater';
import Search from './Search';
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import VisibleTodoList from '../containers/VisibleTodoList'
import _ from 'lodash'

class TodoApp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'a',
                },
                {
                    id: 2,
                    text: 'aaa',
                },
                {
                    id: 3,
                    text: 'abc',
                }
            ],
            searchText: ''
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.addTask = this.addTask.bind(this);
        this.searchTask = this.searchTask.bind(this);
        this.filterTask = this.filterTask.bind(this);
    }

    handleRemove(id) {
        let data = _.reject(this.state.data, function(data) {
            return data.id === id;
        });
        this.setState({
            data: data
        });
    }

    addTask(text) {
        let hash = this.createHashId();

        if(this.state.data.indexOf(hash) < 0) {
            this.setState({
                data: this.state.data.concat({
                    id: hash,
                    text: text
                })
            });
        } else {
            this.addTask(text);
        }

    }

    searchTask(searchText) {
        this.setState({
            searchText: searchText
        });
    }

    filterTask(element) {
        let reg = new RegExp('^' + this.state.searchText);
        return element.text.match(reg);
    }

    render() {

        return (

                <div className="container">

                    <div className="left">
                        <div className="container__todo-create">
                            <div className="title">タスク追加</div>
                            <TodoCreater />
                        </div>

                        <div className="container__search">
                            <div className="title">タスク検索</div>
                            <Search />
                        </div>

                    </div>

                    <div className="right">
                        <div className="title">タスク一覧</div>
                        <VisibleTodoList />
                    </div>
                </div>

        )
    }
}
TodoApp.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect() (TodoApp)
