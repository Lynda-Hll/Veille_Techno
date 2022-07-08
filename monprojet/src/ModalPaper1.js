import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalPaper1({close, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }



return(
<>
   
                <Modal  show={show} onHide={close}  >
                <Modal.Header closeButton>
                <Modal.Title>Protection de la nature </Modal.Title>
                </Modal.Header>
                <Modal.Body >
<p>Protection de l'environnement : pour construire un avenir plus sûr pour notre planète
Les nombreuses destructions de logements, d’infrastructures publiques et de sites industriels entrainent une situation environnementale et sanitaire très inquiétante en plus d'une grave crise de logements salubres. Les décombres composés de matières premières dangereuses jonchent les villes comme les campagnes en polluant les sols et les eaux, et l’absence de service de collecte des déchets fait s’accroitre la pollution un peu partout.



Ly For Humain s’engage donc à mener ses actions en respectant l’environnement en limitant le gaspillage et en agissant contre la pollution grâce à des actions écologiques ciblées.  



Ly For Humain s'engage également pour la rénovation d'habitations insalubres pour offrir aux familles un toit durable et digne.


 </p>

                </Modal.Body>
                <div className="formBtnGroup">
                                          <Button onClick={close} style={{margin:'10px'}}>Fermer</Button>
                                    </div>
                </Modal>

</> 
 )}
 export default ModalPaper1

