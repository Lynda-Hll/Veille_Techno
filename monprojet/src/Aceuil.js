import React from "react";
import logo from "./assets/LALA.PNG";
import enfant from "./assets/BABA.jpg";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import SpaIcon from "@mui/icons-material/Spa";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import {
  Navigate,
  Route,
  useLocation,
  Routes,
  useNavigate,
} from "react-router-dom";

function Aceuil({}) {
  let location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  return (
    <div className="Aceuil">
      <div className="head">
        <td>
          <img src={logo} style={{ width: "180px", height: "70px" }} />
        </td>
        <Tabs aria-label="icon label tabs example">
          <Tab
            className="tab"
            style={{ marginLeft: "100px", borderBottom: "2px solid black" }}
            icon={<HomeIcon color="primary" />}
            label="Accueil "
            onClick={() => navigate("/")}
          />
          <Tab
            className="tab"
            style={{ marginLeft: "30px" }}
            icon={<HelpOutlineIcon style={{ color: "black" }} />}
            label=" Conna??tre "
            onClick={() => navigate("/connaitre")}
          />
          <Tab
            className="tab"
            style={{ marginLeft: "30px" }}
            icon={<EmojiPeopleIcon style={{ color: "green" }} />}
            label="Nos actions"
            onClick={() => navigate("/actions")}
          />
          <Tab
            className="tab"
            style={{ marginLeft: "30px" }}
            icon={<PersonPinIcon style={{ color: "black" }} />}
            label="Contact"
            onClick={() => navigate("/contact")}
          />
          <Tab
            className="tab"
            style={{ marginLeft: "30px" }}
            icon={<FavoriteIcon style={{ color: "red" }} />}
            label="Faire un Don"
            onClick={() => navigate("/don")}
          />
        </Tabs>
      </div>

      <div className="body1">
        <div className="bodyImg">
          <div className="bodytext"></div>
        </div>

        <div className="bodyValeur">
          <div className="connaitreTitre">
            <h1 style={{ whiteSpace: "normal", fontFamily: "serif" }}>
              Ly For Humain en quelques mots
            </h1>
          </div>
          <div className="connaitreBody">
            <div className="connaitre1">
              <span>
                <strong
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "25px",
                  }}
                >
                  <EmojiNatureIcon />
                  Ly For Humain
                  <EmojiNatureIcon />
                </strong>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <br></br>
                  Ly For Humain est n??e de la volont?? d'agir pour les victimes
                  de la guerre, des catastrophes naturelles..., les r??fugi??s et
                  les personnes en d??tresse.
                  <br></br>
                  Ly For Humain est aussi le r??sultat de l'union des personnes
                  et leurs bonnes volont??s de voir le monde en paix et du
                  fusionnement de leurs forces. On est simplement un petit
                  groupe de jeunes qui cherche ?? propager l'id??e de pouvoir
                  aider les autre m??me avec la moindre des choses, les simples
                  actions et que chacun de nous peut ??tre un h??ro dans les yeux
                  de quelqu'un d'autre et lui rendre le sourire avec un simple
                  geste. Favoriser et valoriser l'expression des personnes en
                  situation de pr??carit??. Nos actions reposent sur l'??coute de
                  la parole des personnes en situation de pr??carit?? afin
                  qu'elles puissent, elles???m??mes, d??fendre leurs droits et
                  d??finir leur projet de vie.
                </p>
              </span>{" "}
            </div>
            <div className="connaitre2">
              <span>
                <strong style={{ fontSize: "22px", fontFamily: "serif" }}>
                  Nos Objectifs :
                </strong>
                <br></br>

                <br></br>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <SpaIcon />
                  Ly For Humain vient en aide aux personnes frapp??es par les
                  conflits et les violences, les ??pid??mies, les catastrophes
                  naturelles et climatiques et les effondrements ??conomiques.
                </p>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <SpaIcon /> Elle a pour mission de secourir celles et ceux
                  dont la s??curit??, la sant?? et la vie sont menac??es, en
                  couvrant leurs besoins essentiels : boire, manger, s???abriter
                  et se laver.
                </p>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <SpaIcon />
                  Elle a pour but unir les peuples et les cultures et mettre fin
                  au racisme quoi que ce soit.{" "}
                </p>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <SpaIcon /> Elle d??fend les droits de l'homme en g??n??rale
                  ,elle accorde surtout un soin particulier aux enfants et aux
                  femmes ??tants sensibles et plut??t beaucoup plus agress??s
                  autour du monde.{" "}
                </p>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <SpaIcon />
                  Elle a aussi pour but : la pr??servation de la nature et
                  l'environnement et la protection des animaux.
                </p>
              </span>
            </div>
          </div>
          <div className="titreValeur">
            <h1 style={{ whiteSpace: "normal", fontFamily: "serif" }}>
              Nos valeurs
            </h1>
          </div>
          <div className="valeurs">
            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <VolunteerActivismOutlinedIcon
                  color="primary"
                  fontSize="large"
                />
              </div>
              <div className="paperitem1">
                <h3>Paix</h3>{" "}
              </div>
              <div className="paperitem1">
                <pre
                  className="preHeader"
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "18px",
                  }}
                >
                  Ly For Humain repr??sente la paix et oppose la guerre, c'est
                  une vertu qui touche m??me l'??tat d'esprit, une volont?? de
                  bienveillance, de confiance, de justice.
                  <br></br>
                  Elle a pour principe : quoi que ce soit le probl??me y'a une
                  solution mais non a la guerre, non a la violence, non ?? la
                  destruction...
                </pre>
              </div>
            </div>
            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <HandshakeOutlinedIcon color="primary" fontSize="large" />
              </div>
              <div className="paperitem1">
                <h3> Solidarit??</h3>{" "}
              </div>
              <div className="paperitem1">
                <pre
                  className="preHeader"
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "18px",
                  }}
                >
                  La disparition d???un ??tre cher est une ??tape douloureuse dans
                  la vie de chacun.
                  <br></br>
                  La premi??re r??ponse ?? la souffrance humaine doit ??tre la
                  solidarit??.
                  <br></br>
                  Ly For Humain est fond??e sur la responsabilit?? de venir en
                  aide aux plus d??munis et de les soutenir pour am??liorer leur
                  quotidien.
                </pre>
              </div>
            </div>

            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <PanToolOutlinedIcon color="primary" fontSize="large" />
              </div>
              <div className="paperitem1">
                <h3> Respect</h3>{" "}
              </div>
              <div className="paperitem1">
                <pre
                  className="preHeader"
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "18px",
                  }}
                >
                  Ly For Humain assure le respect des droits de ses
                  b??n??ficiaires, le respect de l'Homme quoi que ce soit son
                  ??tat, son quotidien.
                  <br></br>
                  Chaque humain m??rite d'??tre respect?? mais aussi doit respecter
                  les autres.{" "}
                </pre>
              </div>
            </div>

            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <SentimentVerySatisfiedOutlinedIcon
                  color="primary"
                  fontSize="large"
                />
              </div>
              <div className="paperitem1">
                <h3>Humanit??</h3>{" "}
              </div>
              <div className="paperitem1">
                <pre
                  className="preHeader"
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  Ly For Humain mobilise contre la souffrance humaine et aussi
                  animale qu'elle consid??re intol??rable,
                  <br></br>
                  Ly For Humain est guid??e par la volont?? d'aider ceux qui
                  souffrent, et ceux qui ont perdu leur sourire et aussi
                  l'espoir d'avoir une vie meilleure et un avenir majeur.{" "}
                </pre>
              </div>
            </div>

            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <SportsKabaddiOutlinedIcon color="primary" fontSize="large" />
              </div>
              <div className="paperitem1">
                <h3>Coop??ration</h3>{" "}
              </div>
              <div className="paperitem1">
                <pre
                  className="preHeader"
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  Ly For Humain prend la Coop??ration comme un devoir, elle prend
                  aussi sa force en pendant les mains en ??tant unis.
                  <br></br>
                  L'individu prend sa force du groupe et le groupe de l'individu
                  et ensemble ils peuvent r??aliser l'impossible.
                </pre>
              </div>
            </div>

            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <WcOutlinedIcon color="primary" fontSize="large" />
              </div>
              <div className="paperitem1">
                <h3>Egalit??</h3>
              </div>
              <div className="paperitem1">
                <pre
                  className="preHeader"
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "18px",
                  }}
                >
                  Ly For Humain s'attache ?? tous les traiter de la m??me mani??re
                  et avec dignit?? quoi que ce soit l???origine, la religion, la
                  couleur, la personne???, ??tant humain il m??rite vivre bien, on
                  est tous pareils, c'est nos c??urs qui font la diff??rence.{" "}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="section1">
          <div className="sectionItem1">
            <h3>Ly For Humain</h3>
            <div className="paperitem1">
              <pre className="preFooter" style={{ whiteSpace: "normal" }}>
                Vous pouvez consulter les responsables et m??me les membres pour
                chaque renseignement, question et surtout demande d'aide ,on est
                ?? votre disposition ?? tout moment.
                <br></br>
                Pour ceux et celles qui souhaitent participer ?? nos activit??s ou
                devenir membre, veuillez-vous inscrire en remplissant me
                formulaire avec toutes les informations n??cessaires.
                <br></br>
                Veuillez retrouver nos informations et nos nouvelles ?? travers
                nos r??seaux sociaux.
                <br></br>
                "L'??quipe de Ly For Humain"
              </pre>
            </div>
          </div>

          <div className="sectionItem2">
            <div className="sectionItem2Info">
              <h3>Informations de contact:</h3>
            </div>
            <div>
              <table>
                <tr>
                  <td style={{ padding: "10px 70px" }}>Si??ge social:</td>
                  <td style={{ padding: "10px 70px" }}>Tizi-Ouzou Alg??rie </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 70px" }}>T??l??phone:</td>
                  <td style={{ padding: "10px 70px" }}>0760323666</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 70px" }}>E-mail :</td>
                  <td style={{ padding: "10px 70px" }}>
                    lynda.hellal2003@gamil.com
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 70px" }}>
                    <h3>R??seaux sociaux :</h3>
                  </td>
                  <td style={{ padding: "10px 70px" }}>
                    <div>
                      Instagram : Lynda_hll{" "}
                      <a href="https://instagram.com/lynda_hll?igshid=YmMyMTA2M2Y=">
                        <InstagramIcon style={{ color: "red" }} />
                      </a>{" "}
                    </div>
                    <div>
                      LinkedIn : Lynda Hell{" "}
                      <a href="http://linkedin.com/in/lynda-hellal">
                        <LinkedInIcon style={{ color: "blue" }} />
                      </a>
                    </div>
                  </td>
                </tr>
              </table>

              {/* IT me */}
            </div>
          </div>
        </div>

        <div className="section2">
          <p>2022-2023-Ly For Humain</p>
        </div>
      </div>
    </div>
  );
}

export default Aceuil;
