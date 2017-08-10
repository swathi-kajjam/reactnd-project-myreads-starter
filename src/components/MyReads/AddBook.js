import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description - Represents Link to Search from MyReads Page
 * @returns {HTML} - Returns Dom for a link to Search Page
 */
function AddBook(){
    return(
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    )
}

export default AddBook;