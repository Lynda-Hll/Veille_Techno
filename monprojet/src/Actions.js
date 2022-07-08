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
import SpaIcon from '@mui/icons-material/Spa';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ModalPaper0 from "./ModalPaper0";
import ModalPaper1 from "./ModalPaper1";
import ModalPaper2 from "./ModalPaper2";
import ModalPaper3 from "./ModalPaper3";
import ModalPaper4 from "./ModalPaper4";
import ModalPaper5 from "./ModalPaper5";






function Actions({}){
  const navigate=useNavigate()

  const [openpaper0, setOpenpaper0] = React.useState(false);
  const paper0Func=()=>{setOpenpaper0(true)}  
  const paper0FuncClose=()=>{setOpenpaper0(false)};


  const [openpaper1, setOpenpaper1] = React.useState(false);
  const paper1Func=()=>{setOpenpaper1(true)}  
  const paper1FuncClose=()=>{setOpenpaper1(false)};

  const [openpaper2, setOpenpaper2] = React.useState(false);
  const paper2Func=()=>{setOpenpaper2(true)}  
  const paper2FuncClose=()=>{setOpenpaper2(false)};


  const [openpaper3, setOpenpaper3] = React.useState(false);
  const paper3Func=()=>{setOpenpaper3(true)}  
  const paper3FuncClose=()=>{setOpenpaper3(false)};

  const [openpaper4, setOpenpaper4] = React.useState(false);
  const paper4Func=()=>{setOpenpaper4(true)}  
  const paper4FuncClose=()=>{setOpenpaper4(false)};

  const [openpaper5, setOpenpaper5] = React.useState(false);
  const paper5Func=()=>{setOpenpaper5(true)}  
  const paper5FuncClose=()=>{setOpenpaper5(false)};
 
  
  
return (
    <div className="Aceuil">
      <div className="head">
      

<td><img src= {logo} style={{width:"180px",height:"70px"}}/></td>
       <Tabs aria-label="icon label tabs example">
        <Tab className="tab" style={{marginLeft:"100px"  }} icon={<HomeIcon color="primary" />} label="Aceuil" onClick={()=>navigate("/")} />
        <Tab className="tab" style={{marginLeft:"30px" }}icon={<HelpOutlineIcon style={{color:"black"}} />} label=" connaitre" onClick={()=>navigate("/connaitre")}/>
        <Tab className="tab" style={{marginLeft:"30px", borderBottom:'2px solid black'   }}icon={<EmojiPeopleIcon  style={{color:"green"}}/>} label="Nos actions" onClick={()=>navigate("/actions")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<PersonPinIcon style={{color:"black"}}/>} label="Contact" onClick={()=>navigate("/contact")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<FavoriteIcon  style={{color:"red"}}/>} label="Faire un Don" onClick={()=>navigate("/don")}/>
       </Tabs>
      </div> 
      

      <div className="body1">
            {openpaper0  &&  <ModalPaper0 show={openpaper0} close={paper0FuncClose}  />}
            {openpaper2  &&  <ModalPaper2 show={openpaper2} close={paper2FuncClose}  />}
            {openpaper3  &&  <ModalPaper3 show={openpaper3} close={paper3FuncClose}  />}
            {openpaper4  &&  <ModalPaper4 show={openpaper4} close={paper4FuncClose}  />}
            {openpaper5  &&  <ModalPaper5 show={openpaper5} close={paper5FuncClose}  />}
            {openpaper1  &&  <ModalPaper1 show={openpaper1} close={paper1FuncClose}  />}
        <div className="bodyValeur">
   
           
            <div className="titreValeur"><h1>Nos actions</h1></div>
            <div className="valeurs"> 
          
                  <div className="paper0" onClick={paper0Func}>
                      <p style={{color:'white',fontSize:'2rem',textDecoration:'underline overline #fff'}}>Aide alimentaire</p>
                  </div>


                  <div className="paper1"  onClick={paper1Func}>
                  <p style={{color:'white',fontSize:'2rem',textDecoration:'underline overline #fff'}}>Protection de la nature </p>
                  </div>



                  <div className="paper2"  onClick={paper2Func}>
                  <p style={{color:'white',fontSize:'2rem',textDecoration:'underline overline #fff'}}>Protection animale</p>
                  </div>

                  <div className="paper3"  onClick={paper3Func}>
                  <p style={{color:'white',fontSize:'2rem',textDecoration:'underline overline #fff'}}>Parrainage d'Orphelins</p>
                  </div>


                  <div className="paper4"  onClick={paper4Func}>
                  <p style={{color:'white',fontSize:'2rem',textDecoration:'underline overline #fff'}}>Aide médical </p>
                  </div>

                  <div className="paper5"  onClick={paper5Func}>
                  <p style={{color:'white',fontSize:'2rem',textDecoration:'underline overline #fff'}}>Aide des sans-abris </p>
                  </div>
                      
                
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

export default Actions









