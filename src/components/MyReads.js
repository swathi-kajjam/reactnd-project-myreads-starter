import React from 'react';
import Title from './Title';
import BookShelves from "./BookShelves";

function MyReads(props){
    return(
        <div className="list-books">
            <Title/>
            <BookShelves books={props.books}/>
        </div>
    )
}

export default MyReads;