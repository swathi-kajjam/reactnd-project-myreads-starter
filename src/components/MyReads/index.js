import React from 'react';
import Title from './Title';
import BookShelves from "./BookShelves";
import AddBook from './AddBook';
import PropTypes from 'prop-types';

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

MyReads.propTypes = {
    books: PropTypes.array.isRequired
}

export default MyReads;