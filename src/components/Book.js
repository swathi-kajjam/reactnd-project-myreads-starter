import React from 'react';
import BookShelfChanger from './BookShelfChanger';

function Book(props){

    let {book, category, categories} = props;

    return(
        <div>
        <div className="book">
            <div className="book-top">
                <div style={{width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                <BookShelfChanger category={category} categories={categories} updateBookShelf={props.updateBookShelf} book={book} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
        </div>
    )
}

export default Book;