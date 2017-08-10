import React,  { Component } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';

class SearchBox extends Component{

    state = {
        query: '',
        maxResults: 10
    }

    componentWillMount(){
        this.handleSearchDebounce = debounce(() => {
            this.props.handleSearch(this.state.query, this.state.maxResults)
        }, 500)
    }

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