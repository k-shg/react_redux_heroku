import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            isDone: this.props.isDone,
            editMode: false
        };
        this.handleClickToggleDone = this.handleClickToggleDone.bind(this);
        this.handleClickshowEdit = this.handleClickshowEdit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleKeyUpCloseEdit = this.handleKeyUpCloseEdit.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    handleClickToggleDone() {
        this.props.onClickToggleDone(this.props.id);
    }

    handleClickshowEdit() {
        this.setState(prevState => ({editMode: true}));
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    handleKeyUpCloseEdit(event) {
        if (event.keyCode === 13 && event.shiftKey === true) {
            this.setState({
                editMode: false
            });
            this.props.onEnterUpdateTask(this.state.text);
        }
    }

    handleClickRemove(event) {
        this.props.onClickRemove(this.props.id);
    }

    render() {

        const classNameLi = ClassNames({'list__item--done ': this.props.isDone, 'list__item': true});

        const classNameIcon = ClassNames({
            'fa': true,
            'icon-check': true,
            'fa-check-circle': this.props.isDone,
            'fa-circle-thin': !this.props.isDone,
            'fa-square-o': this.props.isDone === false
        });

        const input = !this.state.editMode
            ? <span className="js-todo_list-text" onClick={this.handleClickshowEdit}>{this.state.text}</span>
            : <input type="text" className="editText js-todo_list-editForm" onChange={this.handleChangeText} onKeyUp={this.handleKeyUpCloseEdit} value={this.state.text}/>;

        return (<div>
            <li className={classNameLi} data-text={this.props.text}>
                <i className={classNameIcon} onClick={this.handleClickToggleDone} aria-hidden="true"></i>
                {input}
                <i className="fa fa-trash icon-trash js-click-trash" onClick={this.handleClickRemove} aria-hidden="true"></i>
            </li>
        </div>);
    }

}

Task.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onEnterUpdateTask: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    onClickToggleDone: PropTypes.func.isRequired,
}

export default Task;
