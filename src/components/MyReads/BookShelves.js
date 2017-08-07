import React from 'react';
import BookShelf from './BookShelf';
import {categorizeBooks} from '../../utils/Utility';

function BookShelves(props){

    const booksByCategory = categorizeBooks(props.books);

    return (
        <div className="list-books-content">
            <div>
                {
                    Object.keys(booksByCategory).map(category => (
                        <BookShelf key={category}
                                   books={booksByCategory[category]}
                                   category={category}
                                   updateBookShelf={props.updateBookShelf}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default BookShelves;