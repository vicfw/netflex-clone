import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-images">
        {movie.map(item => {
          return (
            <img
              key={item.id}
              src={`${imageBaseUrl}${item.poster_path}`}
              alt=""
              className={isLargeRow ? "row-large-image" : "row-image"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
