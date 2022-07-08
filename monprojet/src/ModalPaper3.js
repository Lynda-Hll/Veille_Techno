import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalPaper3({close, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }



return(
<>
   
                <Modal  show={show} onHide={close}  >
                <Modal.Header closeButton>
                <Modal.Title>Parrainage d'Orphelins</Modal.Title>
                </Modal.Header>
                <Modal.Body >
      <p>Parrainer un orphelin, c'est lui sauver la vie ! la vie ! En parrainant un orphelin, vous lui apportez régulièrement et durablement un moyen de survie dans un pays où il n'y a plus rien. Parrainer un orphelin, c'est de lui sauver la vie . Après 10 années de guerre qui ont coûté la vie à plus de 500 000 victimes, ce sont autant de familles qui ont connu la perte d'un père, d'une mère, voire les deux. Sur le terrain, plusieurs milliers d'enfants ont ainsi perdu leurs parents et se trouvent dans une situation d'extrême vulnérabilité où les proches qui les accueillent n'ont souvent pas les moyens de subvenir à leurs besoins alimentaires, matériels, sanitaires ou éducatifs. 
</p> 


                </Modal.Body>
                <div className="formBtnGroup">
                                          <Button onClick={close} style={{margin:'10px'}}>Fermer</Button>
                                    </div>
                </Modal>

</> 
 )}
 export default ModalPaper3

