import React, { Component } from 'react';
import './App.css';
import MyReads from './components/MyReads';
import * as BooksAPI from './utils/BooksAPI';
import { Route } from 'react-router-dom';
import Search from './components/Search';

/**
 * BooksApp - My Reads Application
 */
class BooksApp extends Component{
    state = {
        books:[]
    }

    componentDidMount(){

        BooksAPI.getAll().then(books => {
            this.setState({books})
        }).catch(e => console.error(e));
    }

    /**
     * @description - Updates the book shelf
     * @param book - The book to update
     * @param shelf - The shelf to update
     */
    updateBookShelf = (book, shelf)=>{

        BooksAPI.update(book, shelf).then(() => {

          book.shelf = shelf;
          this.setState({books: this.state.books.filter(bk=> bk.id !== book.id).concat(book)})

        }).catch(e => console.error(e));

    }

    /**
     * @description - Returns Search results based on search query
     * @param query - The Query to Search
     * @param maxResults - The maxResults that needs to returned on Search
     * @returns {Promise.<T>} - The promise containing books
     */
    searchBooks = (query, maxResults) => {

        return BooksAPI.search(query, maxResults)
                        .catch(e => console.error(e))
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