import React, { Component } from 'react';
import NavAppbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavAppbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
