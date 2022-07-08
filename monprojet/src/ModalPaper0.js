import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalPaper0({close, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }
return(
<>
                <Modal  show={show} onHide={close}  >
                <Modal.Header closeButton>
                <Modal.Title>Aide Alimentaire</Modal.Title>
                </Modal.Header>
                <Modal.Body >
<p>Lutter contre la faim et prévenir la malnutrition. L'objectif de notre programme alimentaire est de permettre aux familles en situation précaire (isolées, réfugiées, sans revenus ou autres) de satisfaire leurs besoins vitaux en garantissant l'accès à une nourriture appropriée et complète. </p>

                </Modal.Body>
                <div className="formBtnGroup">
                                          <Button onClick={close} style={{margin:'10px'}}>Fermer</Button>
                                    </div>
                </Modal>

</> 
 )}
 export default ModalPaper0

