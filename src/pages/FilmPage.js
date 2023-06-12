import React from "react";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import lesfilms from "../components/LesMovies";
import "./FilmPage.css";

const FilmPage = () => {
  console.log(lesfilms);
  console.log(lesfilms[0]);

  let { id } = useParams();
  console.log(id);

  let specifiqueFilm = lesfilms.filter((el) => el.id === +id);

  console.log(specifiqueFilm);

  console.log(lesfilms[0]);

  return specifiqueFilm.map((el) => {
    return (
      <div>
        <img src={el.leUrlImage} alt="imagefilm" />
        <div className="filmbody">
          <h1>Nom du film : {el.titre}</h1>
          <p>La présentation : {el.présentation}</p>
          <p>L'année du film : {el.annee}</p>
          <p>La Note : </p>
          <p>
            <Rating name="read-only" value={el.laNote} readOnly />
          </p>
          <p>Le Genre : {el.leGenre}</p>
          <h2>Regarder la vidéo du film</h2>
        </div>
        <iframe
          width="100%"
          height="400"
          src={el.laVideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  });
};

export default FilmPage;
