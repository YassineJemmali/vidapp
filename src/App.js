import React, { useState } from "react";
import "./App.css";
import ".///components/inputMovie.css";
import NavMenu from "./builder/MonMenu";
import Filter from "./components/Filter";
import LesMovies from "./components/LesMovies";
import MovieList from "./components/MovieList";
import InputMovie from "./components/InputMovie";

console.log(LesMovies);

function App() {
  const [mesFilms, setMesFilms] = useState(LesMovies);

  const Add = (nouveauFilm) => {
    setMesFilms([...LesMovies, nouveauFilm]);
  };

  const [recherche, setRecherche] = useState("");
  const [etoile, setEtoile] = useState(0);

  return (
    <div className="App">
      <NavMenu />
      <br />
      <Filter setrecherche={setRecherche} setetoile={setEtoile} />
      <br />
      <InputMovie Add={Add} />
      <br />
      <MovieList
        LesMovies={mesFilms.filter((el) => {
          return (
            el.titre.trim().toLocaleLowerCase().includes(recherche) &&
            el.laNote >= etoile
          );
        })}
      />
    </div>
  );
}

export default App;
