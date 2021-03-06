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
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';

function Connaitre({}){

    const navigate=useNavigate()
return (
    <div className="Aceuil">
      <div className="head">
      

<td><img src= {logo} style={{width:"180px",height:"70px"}}/></td>
       <Tabs aria-label="icon label tabs example">
        <Tab className="tab" style={{marginLeft:"100px"  }} icon={<HomeIcon color="primary" />} label="Aceuil" onClick={()=>navigate("/")} />
        <Tab className="tab" style={{marginLeft:"30px" , borderBottom:'2px solid black' }}icon={<HelpOutlineIcon style={{color:"black"}} />} label=" connaitre" onClick={()=>navigate("/connaitre")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<EmojiPeopleIcon  style={{color:"green"}}/>} label="Nos actions" onClick={()=>navigate("/actions")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<PersonPinIcon style={{color:"black"}}/>} label="Contact" onClick={()=>navigate("/contact")}/>
        <Tab className="tab" style={{marginLeft:"30px"  }}icon={<FavoriteIcon  style={{color:"red"}}/>} label="Faire un Don" onClick={()=>navigate("/don")}/>
       </Tabs>
      </div> 

      <h4>Qui dit solidarit?? dit Ly For Humain!</h4>
<div> <p style={{fontFamily:'serif'}}>Chaque ??tre humain est une plan??te qui m??rite la chaleur du soleil d???un sourire, sois la cause de ce sourire, cr??e le sur le visage de ceux qui ont besoin et fais de ??a un ton d??sir, un simple geste de ta part peut changer une vie quelque part, une simple action que tu pourras faire avec plaisir peut ramener de la joie pour quelqu'un. Vous souhaitez r??aliser votre propre action humanitaire ? Partagez-nous vos id??es et laissez-nous vous montrer notre savoir-faire !</p></div>
<div>
<td ><img className="tof" src= {logo} style={{width:"180px",height:"70px"}}/></td>
    <h2>Histoire:</h2>
    <p>Tout a commenc?? par une id??e, une id??e qui grandit et qui se partage a fur et ?? mesure, l'histoire a
eu son d??but y'a quelques ann??es en arri??re plus exactement en 2017, deux fr??res jumeaux
alg??riens Lyes et Lynda qui ont eu l'id??e de r??unir leurs forces leurs sens de cr??ativit?? dans le but de
servir l'humanit??, ceci ??tait apres avoir v??cu plusieurs ??v??nements qui ont marqu?? dans leurs
esprits et les ont pouss?? a cr???? Ly For Humain.
<br></br>
<br></br>
Tout d'abord au d??but de l'ann??e 2017 quand l'??tat alg??rien a ouvert les fronti??res sud pour les
nig??riens et les maliens vu a tout ce qui se passe dans leur pays et la souffrance qui les a pouss?? ??
prendre le risque de quitter leur territoire de cette mani??re et prendre le chemin du d??sert vers le
nord en traversant des milliers de kilom??tres sans prendre compte a la faim, la soif , la chaleur et aux
diff??rents dangers du d??sert dans l'espoir de pouvoir vivre une vie pratique et meilleure.
Malheureusement une fois au nord les familles immigrantes se trouvent en moiti??, elles perdent la
plupart de ses membres et dans la plupart des temps c'est la cat??gorie sensible dont les enfants et
les vieux qui deviennent victimes de ce parcourt. Une fois au nord, ?? la capital, ?? Tizi, ?? Bejaia une
autre souffrance commence, ou vont-ils ? Ils se sont trouv??s sans-abris, sans nourriture....
C'est l?? que le peuple alg??rien a montr?? sa solidarit?? et son humanit?? ils ont essay?? de r??pondre a
leur besoins essentiels et ??viter ?? nouveau avoir des victimes. C'est l?? que les deux fr??res ??taient
t??moins de cette sc??ne de solidarit?? qui a fait pousser dans leurs cours cette sensation du devoir
d'aide.
<br></br>
<br></br>
Ensuite, en 2019 la fin de l'ann??e, personne ne s'attendait ?? ??a ,une pand??mie qui a chang?? tout le
monde et son fonctionnement. La Covid-19 n'a pas touch?? seulement une partie du monde mais ses
quatre coins, elle a caus?? des cons??quences horribles, quoique ce soit l'??tat du pays personne n'a pu
s'??chapper et alors que ce que le continent africain
pourra dire avec le manque de moyens dans laplupart de ses pays dont on citera l'Alg??rie, ou son peuple a fait preuve de courage, d'union, de
fraternit?? et surtout de responsabilit?? dans les plus durs moments et en disant pand??mie mais pas
que ??a : car elle a bloqu?? tous les secteur de vie ce qui veut dire pas de revenu, ce qui pouvait meme
emmener ?? la famine mais gr??ce ?? leurs actes ils ont r??ussi quand meme a s'en sortir ?? nouveau, ce ph??nom??ne a ??t?? l'un des raisons qui ont pouss?? les deux fr??res ?? r??fl??chir encore plus ?? ??a.
<br></br>
<br></br>
Enfin l'??t?? dernier : Ao??t 2021, la pand??mie a diminu?? apres toute les victimes quelles a eu mais
le nord-africain n'a pas ??t?? ??pargn?? du mal car une autre catastrophe venait tout ?? coup d y'arriver.
Des feux qui se sont d??clench??s en Kabylie, Ils ont d??truit tout ce qui est vert toute vie qui existait :
habitats , champs , voituresil a eu meme des morts et des bless??s et sans parler des animaux. Le
feu n'??tait pas pr??vu et personne n'a compris la vraie cause mais quoi que ce soit, le peuple l'a pay??
cher; car apres quelques heures du d??clanchement du feu; leurs villes et leurs villages sont devenu
cendres. Ils se sont retrouv??s dehors sans rien et encore sans leurs membres de famille, c'??tait
l'enfer pour les kabyles. Ils ont eu du mal ?? d??passer la situation et a croire ce qui s'est pass?? mais ils
se sont mis face au d??fi et avec leur courage et leur coop??ration en tendant leurs mains et en
partageant la moindre des choses qui restaient entre eux meme un bout de pain sans prendre
compte des liens, au moment la famille n'??tait pas que par rapport du sang mais aussi ils ont
consid??r?? tout le monde comme une seule famille Et ??a c'??tait la raison la plus stimulante pour
Lynda et Lyes car ?? ce moment, apres avoir v??cu toutes ces situation et ces moments durs, ils ont
d??cid?? de rendre les choses un peu plus claires, ils ont pens?? a fonder leur association de solidarit??
et d'humanit?? dans le but d'aider gratuitement les gens qui sont dans la mis??re quoi que ce soit leur
cas et leur situation et d'aider ceux qui ont besoin apres avoir v??cu des situation o?? ils ont eu de
laide eux-m??mes.
<br></br>
<br></br>
Ils ont partag?? leur id??e avec des amis proches qui ??taient tr??s contents et pr??ts ?? agir et se mettre
en actions et pas seulement dans les fronti??res alg??riennes mais sortir ?? l'international car partout
autour du monde y'a des voix qui cries au secours et qui ont besoin d'aide, qui vit la mis??re et qui
m??rite une vie meilleure.
<br></br>
<br></br>
Aujourd'hui le groupe a commenc?? de grandir : il sont 24 jeunes de 17 ?? 25 ans dont on a un m??lange
de nationalit??s : (alg??riens, fran??ais, malgache;.), ils se pr??parent pour se lancer dans ce projet.
</p>

<h4> Qui  sommes-nous?</h4>
<p>la premi??re r??ponse ?? la souffrance humaine doit ??tre la solidarit??. La disparition d???un ??tre cher est une ??tape douloureuse dans la vie de chacun.
    On est un groupe de jeune en parcourt universitaire dans diff??rentes sp??cialit??s, on vient de diff??rents pays on a fait pour but commun ??tre ?? la disposition de ceux qui ont besoin ?? se battre pour ceux qui sont dans la mis??re et ont perdu espoir en avenir et en vie
    on a pour objectif rendre le sourire ?? chaque humain qui souffre.

    
    <br></br>
    <br></br>
    
<h4> Nos Objectifs :</h4>
<br></br>
<FilterVintageOutlinedIcon/>Ly For Humain vient en aide aux personnes frapp??es par les conflits et les violences, les ??pid??mies, les catastrophes naturelles et climatiques et les effondrements ??conomiques.
<br></br>
<FilterVintageOutlinedIcon/>Elle a pour mission de secourir celles et ceux dont la s??curit??, la sant?? et la vie sont menac??es, en couvrant leurs besoins essentiels : boire, manger, s???abriter et se laver.
 <br></br>
 <FilterVintageOutlinedIcon/>Elle a pour but unir les peuples et les cultures et mettre fin au racisme quoi que ce soit.
<br></br>
<FilterVintageOutlinedIcon/>Elle d??fend les droits de l'homme en g??n??rale ,elle accorde surtout un soin particulier aux enfants et aux femmes ??tants sensibles et plut??t beaucoup plus agress??s autour du monde.
 <br></br>
 <FilterVintageOutlinedIcon/>Elle a aussi pour but : la pr??servation de la nature et l'environnement et la protection des animaux.   </p>
 </div>  


 <h4>Les premiers membres:</h4>
 <br></br>  
   <div className="papers"> 
   <p>Lynda HELLAL</p>
 <div className="paperMem1">
                        
</div>


<p>Yanis HELLAL</p>
<div className="paperMem2">
                        
</div>


<p>Alla Tribeche</p>
<div className="paperMem3">
                    
</div>


<p>Sanchez KARAOMANA</p>
<div className="paperMem4">
                    
</div>


<p>Kami CHABI</p>
<div className="paperMem5">
                    
</div>


<p>Marzouk SAIBI</p>
<div className="paperMem6">
                    
</div>

</div>  


<div className="papers"> 
   <p>Ouiza HELLAL</p>
 <div className="paperMem7">
                        
</div>


<p>Lyes HELLAL</p>
<div className="paperMem8">
                        
</div>


<p>Lamia Touat</p>
<div className="paperMem9">
                    
</div>


<p>Lisa Irnatene</p>
<div className="paperMem10">
                    
</div>


<p>Mecipsa Aksil</p>
<div className="paperMem11">
                    
</div>


<p>Houda Kechit</p>
<div className="paperMem12">
                    
</div>

</div>

                
      
      <div className="footer">
            <div className="section1">
                  <div className="sectionItem1">
                  <h3>Ly For Humain</h3>
                        <div className="paperitem1">
                            <pre className="preFooter" style={{ whiteSpace:"normal"}}>Vous pouvez consulter les responsables et m??me les membres pour chaque renseignement, question et surtout demande d'aide ,on est ?? votre disposition ?? tout moment.
                            <br></br>
                            Pour ceux et celles qui souhaitent participer ?? nos activit??s ou devenir membre, veuillez-vous inscrire en remplissant me formulaire avec toutes les informations n??cessaires.
                            <br></br>
                            Veuillez retrouver nos informations et nos nouvelles ?? travers nos r??seaux sociaux.
                             <br></br>
                                               "L'??quipe de Ly For Humain"
                                </pre> 
                        </div>
                  </div>

                   <div className="sectionItem2">
                   <div className="sectionItem2Info"  ><h3>Informations de contact:</h3></div>
                               <div>
                                    <table>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>Si??ge social:</td>
                                            <td style={{padding:"10px 70px"}}>Tizi-Ouzou Alg??rie </td>
                                          
                                        </tr>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>T??l??phone:</td>
                                            <td style={{padding:"10px 70px"}}>0760323666</td>
                                        </tr>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>E-mail :</td>
                                            <td style={{padding:"10px 70px"}}>lynda.hellal2003@gamil.com</td>
                                        </tr>
                                        <tr>
                                            <td style={{padding:"10px 70px"}}>
                                                <h3>R??seaux sociaux :</h3>
                                                
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

export default Connaitre





