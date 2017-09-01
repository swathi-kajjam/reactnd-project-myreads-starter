import React, { Component } from 'react';
import { categorizeBooks } from '../../utils/Utility';
import BooksGrid from '../Common/BooksGrid';
import SearchBox from './SearchBox';
import PropTypes from 'prop-types';

/**
 * @description - Represents the Search Component
 * @returns {HTML} - The Dom needed for the Search Component
 */
class Search extends Component{
    static propTypes =  {
        updateBookShelf: PropTypes.func.isRequired,
        searchBooks: PropTypes.func.isRequired
    }

    state = {
        books: []
    }

    /**
     * @description - The handler which gets fired when search input gets changed
     * @param query - The query to Search books for
     * @param maxResults - The maximum number of results that needs to be returned on Search
     * @returns {books} books based on the search query
     */
    handleSearch = (query, maxResults) => {
        query ? this.props.searchBooks(query, maxResults).then(books => this.setState({books})) : this.setState({books:[]})
    }

    render(){
        const {listOfAllCategories} = categorizeBooks(this.state.books);

        return(
            <div className="search-books">
               <SearchBox handleSearch={this.handleSearch}/>

                {(this.state.books && this.state.books.length > 0) && (
                    <div className="search-books-results">
                        <BooksGrid books={this.state.books} categories={listOfAllCategories}
                                   updateBookShelf={this.props.updateBookShelf}/>
                     </div>
                )}
            </div>
        )
    }
}

export default Search;