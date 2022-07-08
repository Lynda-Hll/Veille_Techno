import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./styles.css";
import { Notyf } from 'notyf';
function ModalPaper2({close, show}) {
    const notyf = new Notyf();
    const [content, setContent] = useState("")
    const ValiderFunc = () => {
        notyf.success('Don effectué');
    }



return(
<>
   
                <Modal  show={show} onHide={close}  >
                <Modal.Header closeButton>
                <Modal.Title>Protection animale</Modal.Title>
                </Modal.Header>
                <Modal.Body >

<p>Protection animale: recueillir et nourrir les animaux en détresse, perdus ou abandonnés La guerre touche toute forme de vie, y compris les animaux. Trop souvent oubliés et pourtant victimes de la même façon, ils ont aussi été frappés de plein fouet par la violence des bombardements et la rudesse des conditions de vie sur place. Parmi ceux qui survivent, beaucoup souffrent de la faim, de blessures non soignées, et de détresse causée  par la disparition de leurs maitres décédés ou contraints de fuir sans pouvoir les emporter avec eux.
Pour répondre à cette situation, Ly For Humain s'implique dans la protection animale et se donne pour objectif d'apporter toute son aide aux animaux en détresse, perdus ou abandonnés que les bouleversements de la guerre ont  largement affectés.
</p>
          
      </Modal.Body>
                <div className="formBtnGroup">
                                          <Button onClick={close} style={{margin:'10px'}}>Fermer</Button>
                                    </div>
                </Modal>

</> 
 )}
 export default ModalPaper2

