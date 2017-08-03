import React from 'react';
import Book from './Book';

function BookShelf(props){

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.category}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map((book, index) => (
                            <li key={index}>
                               <Book book={book} categories={props.categories}/>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;