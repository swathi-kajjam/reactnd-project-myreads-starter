import React from 'react';
import Title from './Title';
import BookShelves from "./BookShelves";
import AddBook from './AddBook';

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