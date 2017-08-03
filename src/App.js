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
            this.setState({books})
        })
    }

    render(){
        return(
          <MyReads books={this.state.books}/>
        )
    }
}

export default BooksApp;