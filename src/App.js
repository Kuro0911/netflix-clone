import React from 'react';
import './App.css';
import Row from './Row.js';
import Banner from './Banner.js';
import Nav from './Nav.js'
import requests from './requests';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
