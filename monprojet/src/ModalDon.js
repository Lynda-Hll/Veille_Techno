import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalDon({donFuncClose, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }



return(
<>
   
                <Modal  show={show} onHide={donFuncClose}  >
                <Modal.Header closeButton>
                <Modal.Title>Faire un Don </Modal.Title>
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
                                 
                                    <div className='formGroup'>  
                                          <label className='formLabel' for="password">Adresse mail</label>  
                                          <input className='formInput'  placeholder={"Veuilez saisir votre adresse mail"} id="password"  type="text" /> 
                                    </div>

                                    <div className='formGroup'>  
                                          <label className='formLabel' for="password">Montant</label>  
                                          <input className='formInput'  placeholder={"Veuilez saisir le montant € "} id="password"  type="text" /> 
                                    </div>

                                    <div className='formGroup'>  
                                          <label className='formLabel' for="password"> Num de carte bancaire</label>  
                                          <input className='formInput'  placeholder={"Veuilez saisir le numero de votre carte bancaire"} id="password"  type="text" maxLength={14}/> 
                                    </div>

                                    <div className='formGroup'>  
                                          <label className='formLabel' for="password">CVC</label>  
                                          <input className='formInput'  placeholder={"Veuilez saisir votre CVC"} id="password"  type="password" maxLength={3}/> 
                                    </div>
                                


                                    <div className="formBtnGroup">
                                          <Button  style={{backgroundColor:'red', marginRight:'15px'}} onClick={donFuncClose}>Annuler</Button>
                                    </div>
                                        <div className="formBtnGroup">
                                          <Button onClick={ValiderFunc}>Valider</Button>
                                    </div>
                </div>

                </Modal.Body>
                
                </Modal>

</> 
 )}
 export default ModalDon

