import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Filter({ setrecherche, setetoile }) {
  return (
    <div className="tousLesFiltres">
      <InputGroup className="mb-3">
        <Form.Control
          name="Filter"
          placeholder="Rechercher"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            return setrecherche(e.target.value);
          }}
        />
      </InputGroup>

      <Typography component="legend">Filtre</Typography>
      <Rating
        name="simple-controlled"
        defaulvalue={0}
        onChange={(event, newValue) => {
          setetoile(newValue);
        }}
      />
    </div>
  );
}

export default Filter;
