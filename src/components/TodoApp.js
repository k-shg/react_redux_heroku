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
        console.log('appのremove');
        let data = _.reject(this.state.data, function(data) {
            return data.id === id;
        });

        this.setState({
            data: data
        });
    }

    addTask(text) {
        console.log('addTask');

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
        console.log('searchTask');
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
            <div>
                <TodoCreater />
                <Search />
                <VisibleTodoList />
            </div>
        )
    }
}
TodoApp.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect() (TodoApp)
