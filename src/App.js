import React from "react";
import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import { Urls } from "./requests";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        title={"Orginals"}
        fetchUrl={Urls.netflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Romance"} fetchUrl={Urls.romanceMovies} />
      <Row title={"Horror"} fetchUrl={Urls.horrorMovies} />
      <Row title={"Top Rated"} fetchUrl={Urls.topRated} />
      <Row title={"Action"} fetchUrl={Urls.actionMovies} />
      <Row title={"Documentaries"} fetchUrl={Urls.documentaries} />
    </div>
  );
}

export default App;
