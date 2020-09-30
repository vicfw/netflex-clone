import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Banner.module.css";
import { Urls } from "../requests";

function Banner() {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Urls.netflixOriginals);
      const response = request.data.results;
      setMovie(response[Math.floor(Math.random() * response.length - 1)]);
    }
    fetchData();
  }, []);
  const backgroundImage = `${imageBaseUrl}${
    movie.backdrop_path || movie.poster_path
  }`;
  const overview = movie.overview;
  const str = String(overview);
  const ez = str.substring(0, 151);
  return (
    <div
      className={classes.bannerContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={classes.bannerContent}>
        <h1 className={classes.title}>
          {movie.name || movie.title || movie.original_title}
        </h1>
        <h3>{`${ez}...`}</h3>
        <button className={classes.btn}>Play</button>
        <button className={classes.btn}>Mylist</button>
      </div>
      <div className={classes.bannerFade}></div>
    </div>
  );
}

export default Banner;
