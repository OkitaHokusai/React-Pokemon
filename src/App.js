import React from "react";
import './App.css';
import Search from './components/search'
import SavedPoke from './components/saved'
import { createStore } from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {

  return (
    <Provider store={myStore} >
      <div className="App">
        <Search/>
        <SavedPoke/>      
      </div>
    </Provider>

  );
}

export default App;
