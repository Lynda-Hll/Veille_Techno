import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
function ModalMot({motFuncClose, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Message envoyé');
    }

return(
<>
   
                <Modal  show={show} onHide={motFuncClose}  >
                <Modal.Header closeButton>
                <Modal.Title>Laisser un mot </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <div className='form' id="start" action="/">
                            <div className='formGroup'>
                                <label className='formLabel'   for="password">Nom</label>
                                <input  className='formInput' placeholder={"Veuilez saisir votre nom"} id="password" type="text" />
                            </div>
                            <div className='formGroup'>
                                <label className='formLabel' for="password">Prénom</label>
                                <input  className='formInput' placeholder={"Veuilez saisir votre prénom"} id="password" type="password" />
                            </div>
                            <div className='liste'>
                            <TextareaAutosize maxRows ={4}aria-label="maximum height"placeholder="Laissez votre message" style={{ width: 400 }}/>
                                                                     
                            </div>     
                            
                            
                         
                             <div className='buttons'>
                                    <div className="formBtnGroup">
                                          <Button  style={{backgroundColor:'red', marginRight:'15px'}} onClick={motFuncClose}>Annuler</Button>
                                    </div>
                                    <div className="formBtnGroup">
                                          <Button onClick={ValiderFunc}>Valider</Button>
                                    </div>
                             </div>
                </div>
                

                       </Modal.Body>
                
                </Modal>

</> 
 )}
 export default ModalMot

