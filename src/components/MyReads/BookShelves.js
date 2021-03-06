import React from 'react';
import BookShelf from './BookShelf';
import {categorizeBooks} from '../../utils/Utility';
import PropTypes from 'prop-types';

/**
 * @description - Categorize books and call BookShelf for each Category
 * @param props - The props from parent Component(index)
 * @returns {HTML} - The DOM needed for creating book shelves
 */
function BookShelves(props){

    const booksByCategory = categorizeBooks(props.books);

    return (
        <div className="list-books-content">
            <div>
                    { (booksByCategory && Object.keys(booksByCategory).length > 0) && (
                        Object.keys(booksByCategory).map(category => (
                            <BookShelf key={category}
                                       books={booksByCategory[category]}
                                       category={category}
                                       updateBookShelf={props.updateBookShelf}
                            />
                        ))
                    )}
            </div>
        </div>
    )

}

BookShelves.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookShelves;