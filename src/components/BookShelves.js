import React from 'react';
import BookShelf from './BookShelf';
import {capitalizeFirstLetter} from '../utils/Utility';

/**
 * categorizeBooks : categorize the books
 * @param books
 * @returns {{booksByCategory: Array, listOfAllCategories: Array}}
 */
function categorizeBooks(books){

    let booksByCategory = [],
        listOfAllCategories = [];

    books.forEach(book => {
        let shelf = book.shelf;

        /* if shelf category doesn't exist create category and add book */
        if(!booksByCategory[shelf]){

            booksByCategory[shelf] = [];

            /* create object with all different categories available
                [currentlyReading: 'Currently Reading', wantToRead: 'Want To Read', read: 'Read']
             */
            listOfAllCategories[shelf] = capitalizeFirstLetter(book.shelf);
        }
        booksByCategory[shelf].push(book);
    })

    return {booksByCategory, listOfAllCategories};
}

function BookShelves(props){

    const {booksByCategory, listOfAllCategories} = categorizeBooks(props.books);

    return (
        <div className="list-books-content">
            <div>
                {
                    Object.keys(booksByCategory).map(category => (
                        <BookShelf key={category} books={booksByCategory[category]} category={category} categories={listOfAllCategories} updateBookShelf={props.updateBookShelf}/>
                    ))
                }
            </div>
        </div>
    )

}

export default BookShelves;