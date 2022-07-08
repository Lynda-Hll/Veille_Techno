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

      <h4>Qui dit solidarité dit Ly For Humain!</h4>
<div> <p style={{fontFamily:'serif'}}>Chaque être humain est une planète qui mérite la chaleur du soleil d’un sourire, sois la cause de ce sourire, crée le sur le visage de ceux qui ont besoin et fais de ça un ton désir, un simple geste de ta part peut changer une vie quelque part, une simple action que tu pourras faire avec plaisir peut ramener de la joie pour quelqu'un. Vous souhaitez réaliser votre propre action humanitaire ? Partagez-nous vos idées et laissez-nous vous montrer notre savoir-faire !</p></div>
<div>
<td ><img className="tof" src= {logo} style={{width:"180px",height:"70px"}}/></td>
    <h2>Histoire:</h2>
    <p>Tout a commencé par une idée, une idée qui grandit et qui se partage a fur et à mesure, l'histoire a
eu son début y'a quelques années en arrière plus exactement en 2017, deux frères jumeaux
algériens Lyes et Lynda qui ont eu l'idée de réunir leurs forces leurs sens de créativité dans le but de
servir l'humanité, ceci était apres avoir vécu plusieurs évènements qui ont marqué dans leurs
esprits et les ont poussé a créé Ly For Humain.
<br></br>
<br></br>
Tout d'abord au début de l'année 2017 quand l'état algérien a ouvert les frontières sud pour les
nigériens et les maliens vu a tout ce qui se passe dans leur pays et la souffrance qui les a poussé à
prendre le risque de quitter leur territoire de cette manière et prendre le chemin du désert vers le
nord en traversant des milliers de kilomètres sans prendre compte a la faim, la soif , la chaleur et aux
différents dangers du désert dans l'espoir de pouvoir vivre une vie pratique et meilleure.
Malheureusement une fois au nord les familles immigrantes se trouvent en moitié, elles perdent la
plupart de ses membres et dans la plupart des temps c'est la catégorie sensible dont les enfants et
les vieux qui deviennent victimes de ce parcourt. Une fois au nord, à la capital, à Tizi, à Bejaia une
autre souffrance commence, ou vont-ils ? Ils se sont trouvés sans-abris, sans nourriture....
C'est là que le peuple algérien a montré sa solidarité et son humanité ils ont essayé de répondre a
leur besoins essentiels et éviter à nouveau avoir des victimes. C'est là que les deux frères étaient
témoins de cette scène de solidarité qui a fait pousser dans leurs cours cette sensation du devoir
d'aide.
<br></br>
<br></br>
Ensuite, en 2019 la fin de l'année, personne ne s'attendait à ça ,une pandémie qui a changé tout le
monde et son fonctionnement. La Covid-19 n'a pas touché seulement une partie du monde mais ses
quatre coins, elle a causé des conséquences horribles, quoique ce soit l'état du pays personne n'a pu
s'échapper et alors que ce que le continent africain
pourra dire avec le manque de moyens dans laplupart de ses pays dont on citera l'Algérie, ou son peuple a fait preuve de courage, d'union, de
fraternité et surtout de responsabilité dans les plus durs moments et en disant pandémie mais pas
que ça : car elle a bloqué tous les secteur de vie ce qui veut dire pas de revenu, ce qui pouvait meme
emmener à la famine mais grâce à leurs actes ils ont réussi quand meme a s'en sortir à nouveau, ce phénomène a été l'un des raisons qui ont poussé les deux frères à réfléchir encore plus à ça.
<br></br>
<br></br>
Enfin l'été dernier : Août 2021, la pandémie a diminué apres toute les victimes quelles a eu mais
le nord-africain n'a pas été épargné du mal car une autre catastrophe venait tout à coup d y'arriver.
Des feux qui se sont déclenchés en Kabylie, Ils ont détruit tout ce qui est vert toute vie qui existait :
habitats , champs , voituresil a eu meme des morts et des blessés et sans parler des animaux. Le
feu n'était pas prévu et personne n'a compris la vraie cause mais quoi que ce soit, le peuple l'a payé
cher; car apres quelques heures du déclanchement du feu; leurs villes et leurs villages sont devenu
cendres. Ils se sont retrouvés dehors sans rien et encore sans leurs membres de famille, c'était
l'enfer pour les kabyles. Ils ont eu du mal à dépasser la situation et a croire ce qui s'est passé mais ils
se sont mis face au défi et avec leur courage et leur coopération en tendant leurs mains et en
partageant la moindre des choses qui restaient entre eux meme un bout de pain sans prendre
compte des liens, au moment la famille n'était pas que par rapport du sang mais aussi ils ont
considéré tout le monde comme une seule famille Et ça c'était la raison la plus stimulante pour
Lynda et Lyes car à ce moment, apres avoir vécu toutes ces situation et ces moments durs, ils ont
décidé de rendre les choses un peu plus claires, ils ont pensé a fonder leur association de solidarité
et d'humanité dans le but d'aider gratuitement les gens qui sont dans la misère quoi que ce soit leur
cas et leur situation et d'aider ceux qui ont besoin apres avoir vécu des situation où ils ont eu de
laide eux-mêmes.
<br></br>
<br></br>
Ils ont partagé leur idée avec des amis proches qui étaient très contents et prêts à agir et se mettre
en actions et pas seulement dans les frontières algériennes mais sortir à l'international car partout
autour du monde y'a des voix qui cries au secours et qui ont besoin d'aide, qui vit la misère et qui
mérite une vie meilleure.
<br></br>
<br></br>
Aujourd'hui le groupe a commencé de grandir : il sont 24 jeunes de 17 à 25 ans dont on a un mélange
de nationalités : (algériens, français, malgache;.), ils se préparent pour se lancer dans ce projet.
</p>

<h4> Qui  sommes-nous?</h4>
<p>la première réponse à la souffrance humaine doit être la solidarité. La disparition d’un être cher est une étape douloureuse dans la vie de chacun.
    On est un groupe de jeune en parcourt universitaire dans différentes spécialités, on vient de différents pays on a fait pour but commun être à la disposition de ceux qui ont besoin à se battre pour ceux qui sont dans la misère et ont perdu espoir en avenir et en vie
    on a pour objectif rendre le sourire à chaque humain qui souffre.

    
    <br></br>
    <br></br>
    
<h4> Nos Objectifs :</h4>
<br></br>
<FilterVintageOutlinedIcon/>Ly For Humain vient en aide aux personnes frappées par les conflits et les violences, les épidémies, les catastrophes naturelles et climatiques et les effondrements économiques.
<br></br>
<FilterVintageOutlinedIcon/>Elle a pour mission de secourir celles et ceux dont la sécurité, la santé et la vie sont menacées, en couvrant leurs besoins essentiels : boire, manger, s’abriter et se laver.
 <br></br>
 <FilterVintageOutlinedIcon/>Elle a pour but unir les peuples et les cultures et mettre fin au racisme quoi que ce soit.
<br></br>
<FilterVintageOutlinedIcon/>Elle défend les droits de l'homme en générale ,elle accorde surtout un soin particulier aux enfants et aux femmes étants sensibles et plutôt beaucoup plus agressés autour du monde.
 <br></br>
 <FilterVintageOutlinedIcon/>Elle a aussi pour but : la préservation de la nature et l'environnement et la protection des animaux.   </p>
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

export default Connaitre





