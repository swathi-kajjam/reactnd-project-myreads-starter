import React from 'react';
import Book from './Book';

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

export default BooksGrid;