import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';

import HomePage from './Pages/HomePage/HomePage';
import CheckOut from './Pages/Checkoutpage/Checkoutpage';
import Header from './Components/Header/Header.component';
import Sort from './Components/Sort/Sort.component';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path ='/' component = {Sort}/>
        <Route exact path='/' component={HomePage} />
        <Route path='/CheckOut' component={CheckOut} />
      </div>
    )
  }
}

export default App;
