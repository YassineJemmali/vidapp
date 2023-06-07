import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";

const MovieCard = ({ leFilm }) => {
  // les variables du films

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={leFilm.leUrlImage} />
        <Card.Body>
          <Card.Title>{leFilm.titre}</Card.Title>
          <Card.Text className="CarteTexte">Année : {leFilm.annee}</Card.Text>
          <Card.Text className="CarteTexte">La note</Card.Text>
          <Rating name="read-only" value={leFilm.laNote} readOnly />
          <Card.Text className="CarteTexte">Genre : {leFilm.leGenre}</Card.Text>
          <Button variant="primary">
            <a
              alt="Vidéo du film"
              href={leFilm.laVideo}
              target="_blank"
              rel="noreferrer"
            >
              Regarder
            </a>{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
