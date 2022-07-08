import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";
import { Notyf } from "notyf";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
function ModalAutre({ autreFuncClose, show }) {
  const notyf = new Notyf();
  const [content, setContent] = useState("");
  const ValiderFunc = () => {
    notyf.success("Don effectué");
  };

  return (
    <>
      <Modal show={show} onHide={autreFuncClose}>
        <Modal.Header closeButton>
          <Modal.Title>Autres </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form" id="start" action="/">
            <div className="formGroup">
              <label className="formLabel" for="password">
                Nom
              </label>
              <input
                className="formInput"
                placeholder={"Veuilez saisir votre nom"}
                id="password"
                type="text"
              />
            </div>
            <div className="formGroup">
              <label className="formLabel" for="password">
                Prénom
              </label>
              <input
                className="formInput"
                placeholder={"Veuilez saisir votre prénom"}
                id="password"
                type="password"
              />
            </div>
            <div className="liste">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Alimentation"
                />
                <FormControlLabel control={<Checkbox />} label="Vêtements" />
                <FormControlLabel control={<Checkbox />} label="Médicaments" />
                <FormControlLabel control={<Checkbox />} label="Jouets" />
              </FormGroup>
            </div>

            <div className="buttons">
              <div className="formBtnGroup">
                <Button
                  style={{ backgroundColor: "red", marginRight: "15px" }}
                  onClick={autreFuncClose}
                >
                  Annuler
                </Button>
              </div>
              <div className="formBtnGroup">
                <Button onClick={ValiderFunc}>Valider</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalAutre;
