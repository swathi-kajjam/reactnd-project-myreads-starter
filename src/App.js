import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import BookShelves from './BookShelves';

class BooksApp extends Component{
    render(){
        return(
            <div className="list-books">
              <Title/>
              <BookShelves/>
            </div>
        )
    }
}

export default BooksApp