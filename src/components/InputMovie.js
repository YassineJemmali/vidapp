import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ".//inputMovie.css";
import Rating from "@mui/material/Rating";

const InputMovie = ({ Add }) => {
  // les variables du modal

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // formulaire d'ajout de film vide en utilisant useState
  const [nFilm, setNFilm] = useState({
    titre: "",
    présentation: "",
    annee: "",
    laNote: 0,
    leGenre: "",
    leUrlImage: "",
    laVideo: "",
  });

  const handleChange = (e) => {
    setNFilm({ ...nFilm, [e.target.name]: e.target.value });
  };
  const AjoutFilm = () => {
    Add(nFilm);
    setShow(false);
  };

  console.log(nFilm);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un Film.
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau film</Modal.Title>
        </Modal.Header>

        <div className="tousLesAjout">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom du film</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Ajouter le nom"
              name="titre"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Présentation du film</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Ajouter la présentation"
              name="présentation"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>L'année du film</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="number"
              placeholder="L'année du film"
              name="annee"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>L'image du film</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Ajouter L'url de la photo"
              name="leUrlImage"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>La vidéo du film</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Ajouter L'url de la vidéo"
              name="laVideo"
            />
          </Form.Group>
          <p>Le genre du film</p>
          <Form.Select
            aria-label="Default select example"
            name="leGenre"
            className="tousLesSelect"
            onChange={handleChange}
          >
            <option>Choisissez un genre</option>
            <option value="1">Action</option>
            <option value="2">Thriller</option>
            <option value="3">Comédie</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ajouter une note</Form.Label>
            <br />
            <Rating
              name="laNote"
              // value={value}
              onChange={(event, newValue) => {
                setNFilm({ ...nFilm, laNote: newValue });
              }}
            />
          </Form.Group>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={AjoutFilm}>
            Ajouter le film
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InputMovie;
