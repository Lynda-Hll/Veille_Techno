import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalPaper4({close, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }



return(
<>
   
                <Modal  show={show} onHide={close}  >
                <Modal.Header closeButton>
                <Modal.Title>Aide medical</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                <p>On vise aider les malades, les patients ,les cancéreux ,et les handicapé et tous ceux qui souffre en silence sans personne les entend en les encourageant et leurs montrant la flemme de l'espoir et en répondant à leur besoin.   </p> 
                </Modal.Body>
                <div className="formBtnGroup">
                                          <Button onClick={close} style={{margin:'10px'}}>Fermer</Button>
                                    </div>
                </Modal>

</> 
 )}
 export default ModalPaper4

