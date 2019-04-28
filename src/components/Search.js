import React from 'react';
import {searchTask} from '../actions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleChangeText = this.handleChangeText.bind(this);

    }
    handleChangeText(event) {
        this.setState({
            text: event.target.value
        })
        this.props.dispatch(searchTask(event.target.value));

    }
    render() {

        return (
            <div className="searchBox">
                <i className="fa fa-search searchBox__icon" area-hidden="true"></i>
                <input
                    onChange={this.handleChangeText}
                    type="text" className="searchBox__input" value={this.state.text} placeholder="検索ワードを入力してください"/>
            </div>
        )
    }
}

Search.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect() (Search)
