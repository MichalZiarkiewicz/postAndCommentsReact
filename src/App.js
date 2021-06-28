import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ListOfPosts from './components/ListOfPosts';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ListOfPosts />
        </div>
      </Provider>
    );
  }
}

export default App;