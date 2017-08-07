import React, { Component } from 'react';
import './App.css';
import MyReads from './components/MyReads';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
import Search from './components/Search';

class BooksApp extends Component{
    state = {
        books:[]
    }

    componentDidMount(){

        BooksAPI.getAll().then(books => {
            this.setState({books})
        })
    }

    updateBookShelf = (book, shelf)=>{

        BooksAPI.update(book, shelf).then(() => {

          book.shelf = shelf;
          this.setState({books: this.state.books.filter(bk=> bk.id !== book.id).concat(book)})

        });

    }

    searchBooks = (query, maxResults) => {
        return BooksAPI.search(query, maxResults)
    }

    render(){
        return(
          <div>
              <Route exact path="/" render={()=>
                  <MyReads books={this.state.books} updateBookShelf={this.updateBookShelf}/>
              }/>
              <Route path="/search" render={()=>
                  <Search updateBookShelf={this.updateBookShelf} searchBooks={this.searchBooks}/>
              }/>
           </div>

        )
    }
}

export default BooksApp;