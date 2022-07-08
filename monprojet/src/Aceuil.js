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
            label=" Connaître "
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
                  Ly For Humain est née de la volonté d'agir pour les victimes
                  de la guerre, des catastrophes naturelles..., les réfugiés et
                  les personnes en détresse.
                  <br></br>
                  Ly For Humain est aussi le résultat de l'union des personnes
                  et leurs bonnes volontés de voir le monde en paix et du
                  fusionnement de leurs forces. On est simplement un petit
                  groupe de jeunes qui cherche à propager l'idée de pouvoir
                  aider les autre même avec la moindre des choses, les simples
                  actions et que chacun de nous peut être un héro dans les yeux
                  de quelqu'un d'autre et lui rendre le sourire avec un simple
                  geste. Favoriser et valoriser l'expression des personnes en
                  situation de précarité. Nos actions reposent sur l'écoute de
                  la parole des personnes en situation de précarité afin
                  qu'elles puissent, elles–mêmes, défendre leurs droits et
                  définir leur projet de vie.
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
                  Ly For Humain vient en aide aux personnes frappées par les
                  conflits et les violences, les épidémies, les catastrophes
                  naturelles et climatiques et les effondrements économiques.
                </p>
                <p
                  style={{
                    whiteSpace: "normal",
                    fontFamily: "serif",
                    fontSize: "20px",
                  }}
                >
                  <SpaIcon /> Elle a pour mission de secourir celles et ceux
                  dont la sécurité, la santé et la vie sont menacées, en
                  couvrant leurs besoins essentiels : boire, manger, s’abriter
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
                  <SpaIcon /> Elle défend les droits de l'homme en générale
                  ,elle accorde surtout un soin particulier aux enfants et aux
                  femmes étants sensibles et plutôt beaucoup plus agressés
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
                  Elle a aussi pour but : la préservation de la nature et
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
                  Ly For Humain représente la paix et oppose la guerre, c'est
                  une vertu qui touche même l'état d'esprit, une volonté de
                  bienveillance, de confiance, de justice.
                  <br></br>
                  Elle a pour principe : quoi que ce soit le problème y'a une
                  solution mais non a la guerre, non a la violence, non à la
                  destruction...
                </pre>
              </div>
            </div>
            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <HandshakeOutlinedIcon color="primary" fontSize="large" />
              </div>
              <div className="paperitem1">
                <h3> Solidarité</h3>{" "}
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
                  La disparition d’un être cher est une étape douloureuse dans
                  la vie de chacun.
                  <br></br>
                  La première réponse à la souffrance humaine doit être la
                  solidarité.
                  <br></br>
                  Ly For Humain est fondée sur la responsabilité de venir en
                  aide aux plus démunis et de les soutenir pour améliorer leur
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
                  bénéficiaires, le respect de l'Homme quoi que ce soit son
                  état, son quotidien.
                  <br></br>
                  Chaque humain mérite d'être respecté mais aussi doit respecter
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
                <h3>Humanité</h3>{" "}
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
                  animale qu'elle considère intolérable,
                  <br></br>
                  Ly For Humain est guidée par la volonté d'aider ceux qui
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
                <h3>Coopération</h3>{" "}
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
                  Ly For Humain prend la Coopération comme un devoir, elle prend
                  aussi sa force en pendant les mains en étant unis.
                  <br></br>
                  L'individu prend sa force du groupe et le groupe de l'individu
                  et ensemble ils peuvent réaliser l'impossible.
                </pre>
              </div>
            </div>

            <div className="paper">
              <div className="paperitem1" style={{ marginTop: "20px" }}>
                <WcOutlinedIcon color="primary" fontSize="large" />
              </div>
              <div className="paperitem1">
                <h3>Egalité</h3>
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
                  Ly For Humain s'attache à tous les traiter de la même manière
                  et avec dignité quoi que ce soit l’origine, la religion, la
                  couleur, la personne…, étant humain il mérite vivre bien, on
                  est tous pareils, c'est nos cœurs qui font la différence.{" "}
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
                Vous pouvez consulter les responsables et même les membres pour
                chaque renseignement, question et surtout demande d'aide ,on est
                à votre disposition à tout moment.
                <br></br>
                Pour ceux et celles qui souhaitent participer à nos activités ou
                devenir membre, veuillez-vous inscrire en remplissant me
                formulaire avec toutes les informations nécessaires.
                <br></br>
                Veuillez retrouver nos informations et nos nouvelles à travers
                nos réseaux sociaux.
                <br></br>
                "L'équipe de Ly For Humain"
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
                  <td style={{ padding: "10px 70px" }}>Siège social:</td>
                  <td style={{ padding: "10px 70px" }}>Tizi-Ouzou Algérie </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 70px" }}>Téléphone:</td>
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
                    <h3>Réseaux sociaux :</h3>
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
