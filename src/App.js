import React, { Component } from 'react';
import './App.css';
import MyReads from './components/MyReads';
import * as BooksAPI from './utils/BooksAPI';

class BooksApp extends Component{
    state = {
        books:[]
    }

    componentDidMount(){
        BooksAPI.getAll().then(books => {
            console.log(books)
            this.setState({books})
        })
    }

    updateBookShelf = (book, shelf)=>{
        const books = this.state.books.filter(item => item.id !== book.id);

        book.shelf = shelf;
        books.push(book);

        this.setState({books});

        BooksAPI.update(book, shelf);

    }

    render(){
        return(
          <MyReads books={this.state.books} updateBookShelf={this.updateBookShelf}/>
        )
    }
}

export default BooksApp;