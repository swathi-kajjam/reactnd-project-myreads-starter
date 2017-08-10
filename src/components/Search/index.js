import React, { Component } from 'react';
import { categorizeBooks } from '../../utils/Utility';
import BooksGrid from '../Common/BooksGrid';
import SearchBox from './SearchBox';

class Search extends Component{
    state = {
        books: []
    }

    handleSearch = (query, maxResults) => {
        if(query) {
            this.props.searchBooks(query, maxResults)
                .then(books => this.setState({books}))
        }
        else{
            this.setState({books:[]})
        }
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