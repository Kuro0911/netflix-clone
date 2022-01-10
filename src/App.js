import React from 'react';
import './App.css';
import Row from './Row.js'
import requests from './requests'

function App() {
  return (
    <div className="App">
        <h1>netflix</h1>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
