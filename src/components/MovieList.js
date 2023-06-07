import React from "react";
import MovieCard from "./MovieCard";
import ".//inputMovie.css";

const MovieList = ({ LesMovies }) => {
  return (
    <div className="tousLesFilms">
      {LesMovies.map((el) => {
        return <MovieCard leFilm={el} />;
      })}
    </div>
  );
};

export default MovieList;
