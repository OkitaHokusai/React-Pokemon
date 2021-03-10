import React from "react";
import './App.css';
import Search from './components/search'
import SavedPoke from './components/saved'
function App() {

  return (
    <div className="App">
      <Search/>    
      <SavedPoke/>    
    </div>

  );
}

export default App;
