import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalPaper5({close, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }



return(
<>
   
                <Modal  show={show} onHide={close}  >
                <Modal.Header closeButton>
                <Modal.Title>Aide des sans-abri</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                <p>Beaucoup de personne dernièrement se retrouvent dans les rues sans-abri sans avoir quoi manger ni un petit lieu à dormir ils vivent le froid de l'hiver la chaleur de l'été, chaque jours des dizaines de personnes qui rendent l'âme sans que personnes rend compte et prend cette situation d'une manière sérieuse pour résoudre</p>
                </Modal.Body>
                <div className="formBtnGroup">
                                          <Button onClick={close} style={{margin:'10px'}}>Fermer</Button>
                                    </div>
                </Modal>

</> 
 )}
 export default ModalPaper5

