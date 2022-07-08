import React from "react"
import logo from "./assets/LALA.PNG"
import enfant from  "./assets/BABA.jpg"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {useNavigate} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SportsKabaddiOutlinedIcon from '@mui/icons-material/SportsKabaddiOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from 'react-modal';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ModalAutre from "./ModalAutre";
import ModalDon from "./ModalDon";
import ModalMot from "./ModalMot";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Don(){
    const [openDon, setOpenDon] = React.useState(false);
    const [openAutre, setOpenAutre] = React.useState(false);
    const [openMot, setOpenMot] = React.useState(false);

    const navigate=useNavigate()
    const donFunc=()=>{setOpenDon(true)  
      console.log("ncdnjdd")};
    const autreFunc=()=>{setOpenAutre(true)};
    const motFunc=()=>{setOpenMot(true)};

    const donFuncClose=()=>{setOpenDon(false)};
    const autreFuncClose=()=>{setOpenAutre(false)};
    const motFuncClose=()=>{setOpenMot(false)};

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    }

return (
    <div className="Aceuil">
      <div className="head">
      

<td><img src= {logo} style={{width:"180px",height:"70px"}}/></td>
       <Tabs aria-label="icon label tabs example">
        <Tab className="tab" style={{marginLeft:"100px"  }} icon={<HomeIcon color="primary" />} label="Aceuil" onClick={()=>navigate("/")} />
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<HelpOutlineIcon style={{color:"black"}} />} label=" connaitre" onClick={()=>navigate("/connaitre")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<EmojiPeopleIcon  style={{color:"green"}}/>} label="Nos actions" onClick={()=>navigate("/actions")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<PersonPinIcon style={{color:"black"}}/>} label="Contact" onClick={()=>navigate("/contact")}/>
        <Tab className="tab" style={{marginLeft:"30px", borderBottom:'2px solid black'  }}icon={<FavoriteIcon  style={{color:"red"}}/>} label="Faire un Don" onClick={()=>navigate("/don")}/>
       </Tabs>
      </div>
    
      <div className="bodyDon">
      {openDon  &&  <ModalDon show={openDon} donFuncClose={donFuncClose}  />}
      {openAutre  &&  <ModalAutre show={openAutre} autreFuncClose={autreFuncClose}  />}
      {openMot  &&  <ModalMot show={openMot} motFuncClose={motFuncClose}  />}
  

          <div className="bodyDonAction">
              <div> <button className="fab" variant="extended" onClick={donFunc}>
                        <PaidIcon sx={{ mr: 1 }} />
                        <p onClick={donFunc}> Faire un Don</p>
                    </button>
                   
              </div>

              <div> <button variant="extended" className="fab" onClick={autreFunc}>
                        <ShoppingBasketIcon sx={{ mr: 1 }} onClick={autreFunc} />
                        <p onClick={autreFunc}>Autres</p>
                    </button>
              </div>

              <div> <button variant="extended" className="fab" onClick={motFunc}>
                        <HistoryEduIcon  sx={{ mr: 1 }} onClick={motFunc} />
                        <p onClick={motFunc}>Laisser un mot</p>
                    </button>
              </div>
          </div>
          
      </div>

      <div className="footer">
            <div className="section1">
                  <div className="sectionItem1">
                  <h3>Ly For Humain</h3>
                        <div className="paperitem1">
                            <pre className="preFooter" style={{ whiteSpace:"normal"}}>Vous pouvez consulter les responsables et même les membres pour chaque renseignement, question et surtout demande d'aide ,on est à votre disposition à tout moment.
                            <br></br>
                            Pour ceux et celles qui souhaitent participer à nos activités ou devenir membre, veuillez-vous inscrire en remplissant me formulaire avec toutes les informations nécessaires.
                            <br></br>
                            Veuillez retrouver nos informations et nos nouvelles à travers nos réseaux sociaux.
                             <br></br>
                                               "L'équipe de Ly For Humain"
                                </pre> 
                        </div>
                  </div>

                   <div className="sectionItem2">
                   <div className="sectionItem2Info"  ><h3>Informations de contact:</h3></div>
                               <div>
                                    <table>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>Siège social:</td>
                                            <td style={{padding:"10px 70px"}}>Tizi-Ouzou Algérie </td>
                                          
                                        </tr>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>Téléphone:</td>
                                            <td style={{padding:"10px 70px"}}>0760323666</td>
                                        </tr>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>E-mail :</td>
                                            <td style={{padding:"10px 70px"}}>lynda.hellal2003@gamil.com</td>
                                        </tr>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>
                                                <h3>Réseaux sociaux :</h3>
                                                
                                                </td>
                                            <td style={{padding:"10px 70px"}}>
                                            <div>Instagram : Lynda_hll <a href="https://instagram.com/lynda_hll?igshid=YmMyMTA2M2Y=">< InstagramIcon style={{color:"red"}}   /></a> </div>
                                            <div>LinkedIn : Lynda Hell  <a href="http://linkedin.com/in/lynda-hellal" ><LinkedInIcon  style={{color:"blue"}}/></a></div>
                                            </td>
                                        </tr>
                                    </table>

                                   
                                </div> 
                                
                  </div>
            </div>
            
            <div className="section2">
              <p>2022-2023-Ly For Humain</p>
            </div>
      </div> 
                  
 
    </div> 
      

)

}

export default Don

