import React from 'react';
import Title from './Title';
import BookShelves from "./BookShelves";
import AddBook from './AddBook';

/**
 * @description - Represents MyReads page which shows books with categories [Read, Want to Read and Currently Reading Category]
 * @param props - The props from Parent Component
 * @returns {HTML} - The DOM needed for MyReads page
 */
function MyReads(props){
    return(
        <div className="list-books">
            <Title/>
            <BookShelves books={props.books} updateBookShelf={props.updateBookShelf}/>
            <AddBook/>
        </div>
    )
}

export default MyReads;