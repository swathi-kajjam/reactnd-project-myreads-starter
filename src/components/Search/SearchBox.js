import React,  { Component } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @description -Represents the SearchBox Component
 * @returns {HTML} - The Dom needed for the Search Box
 */
class SearchBox extends Component{

    static propTypes = {
        handleSearch: PropTypes.func.isRequired
    }

    state = {
        query: '',
        maxResults: 10
    }

    componentWillMount(){
        this.handleSearchDebounce = debounce(() => {
            this.props.handleSearch(this.state.query, this.state.maxResults)
        }, 500)
    }

    /**
     * @description - The event handler which gets fired when search input gets changed
     * @param e - The event
     */
    onChange = (e) => {
        this.setState({query: e.target.value.trim()})
        this.handleSearchDebounce()
    }

    render(){
        return(
            <div className="search-books-bar">
                <Link className="close-search" to="/"> Close </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}

export default SearchBox;