import React from 'react';
import BooksGrid from '../Common/BooksGrid';
import { capitalizeFirstLetter } from '../../utils/Utility';

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

export default BookShelf;