import React from 'react';
import BookShelfChanger from './BookShelfChanger';

/**
 * @description - Represents the Book Component
 * @param props - The props from parent component (BooksGrid)
 * @returns {HTML} - The Dom needed for generating a Book
 */
function Book(props){

    const {book, category} = props;

    return(
        <div>
        <div className="book">
            <div className="book-top">
                <div style={{width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                <BookShelfChanger category={category} updateBookShelf={props.updateBookShelf} book={book} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
        </div>
    )
}

export default Book;