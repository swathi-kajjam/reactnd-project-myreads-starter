import React from 'react';
import BookShelf from './BookShelf';
import {capitalizeFirstLetter} from '../utils/Utility';

function categorizeBooks(books){

    let booksByCategory = [],
        listOfAllCategories = [];

    books.forEach(book => {
        let shelf = capitalizeFirstLetter(book.shelf);

        if(!booksByCategory[shelf]){
            booksByCategory[shelf] = [];
            listOfAllCategories[shelf] = book.shelf;
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
                    Object.keys(booksByCategory).map((category, index) => (
                        <BookShelf key={index} books={booksByCategory[category]} category={category} categories={listOfAllCategories}/>
                    ))
                }
            </div>
        </div>
    )

}

export default BookShelves;