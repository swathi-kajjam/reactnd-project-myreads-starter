import React, { Component } from 'react';
import { categorizeBooks } from '../../utils/Utility';
import BooksGrid from '../Common/BooksGrid';
import SearchBox from './SearchBox';

/**
 * Search - Represents the Search Component
 */
class Search extends Component{
    state = {
        books: []
    }

    /**
     * @description - The handler which gets fired when search input gets changed
     * @param query - The query to Search books for
     * @param maxResults - The maximum number of results that needs to be returned on Search
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