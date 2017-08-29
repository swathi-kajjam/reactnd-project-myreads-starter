import React from 'react';
import BooksGrid from '../Common/BooksGrid';
import { capitalizeFirstLetter } from '../../utils/Utility';
import PropTypes from 'prop-types';

/**
 * @description - Creates a BookShelf for a given Category
 * @param props - The props from the parent component(BookShelves)
 * @returns {HTML} - The Dom needed for Book Shelf
 */
function BookShelf(props){
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{capitalizeFirstLetter(props.category)}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={props.books} updateBookShelf={props.updateBookShelf}/>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    category: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default BookShelf;