import React from 'react';

import {connect} from 'react-redux'
import {addTask} from '../actions'
import PropTypes from 'prop-types'

class TodoCreater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            errorFlg: false
        }

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeText(event) {
        console.log('changeText');

        this.setState({text: event.target.value});
    }

    handleKeyUp(event) {
        console.log('KeyUp');
        if (event.keyCode === 13 && event.shiftKey === true) {

            if (!this.state.text) {
                this.setState({errorFlg: true});
                return;
            }
            this.setState({errorFlg: false});
            this.setState({text: ''});
            // this.props.onAddTask(this.state.text);
            this.props.dispatch(addTask(this.createHashId(),this.state.text));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    createHashId() {
        return Math.random().toString(36).slice(-8);
    }

    render() {

        const error = this.state.errorFlg
            ? <span className="error js-toggle-error">入力が空です</span>
            : '';

        return (<form className="form" onSubmit={this.handleSubmit}>
            <div className="inputArea">
                <input
                    onChange={this.handleChangeText}
                    onKeyUp={this.handleKeyUp}
                    type="text"
                    className="inputText js-get-val"
                    value={this.state.text}
                    placeholder="あああ何んんらかのタスク"/>
                {error}
            </div>
        </form>)
    }
}


TodoCreater.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect() (TodoCreater);
