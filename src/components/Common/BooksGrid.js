import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

/**
 * @description - Creates the BookGrid for a given Category
 * @param props - The props from parent component (Book Shelf / Search)
 * @returns {DOM} - return DOM for creating list of Books
 */
function BooksGrid(props){
    return(
        <ol className="books-grid">
            {
                props.books.map(book => (
                    <li key={book.id}>
                        <Book book={book} category={book.shelf} updateBookShelf={props.updateBookShelf}/>
                    </li>
                ))
            }
        </ol>
    )
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    category: PropTypes.string,
    updateBookShelf: PropTypes.func.isRequired
}

export default BooksGrid;