import React, { Component } from 'react';
import { categorizeBooks } from '../../utils/Utility';
import BooksGrid from '../Common/BooksGrid';
import { Link } from 'react-router-dom';

class Search extends Component{
    state = {
        query: '',
        maxResults: 10,
        books: []
    }

    handleChange = (query) => {
        this.setState({query: query.trim()});
        this.props.searchBooks(query, this.state.maxResults).then(books => {
            this.setState({books})
        })
    }

    render(){
        const {listOfAllCategories} = categorizeBooks(this.state.books);

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=>this.handleChange(event.target.value)}/>
                    </div>
                </div>

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