import React, {Component} from 'react';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import './App.css';
import ShopList from './containers/ShopList/ShopList';

class App extends Component {
  render() {
    return (
      <div>
        <ShopList />
      </div>
    );
  }
}

export default App;

