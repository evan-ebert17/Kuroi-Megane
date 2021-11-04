import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../assets/glassesShine.png';
import Email from '../assets/Memail.png';
import Discord from '../assets/Miiscord.png';
import Instagram from '../assets/miistagram.png';
import Twitter from '../assets/Mwiitter.png';
import {Link } from "react-router-dom";
// import Particles from 'react-particles-js';
import Main from "./main";


export default function Homehome() {
    return (
        <main className="tbd">
            <div className="background">
                {/* <div className="particlesDiv">
        <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} />
      </div> */}

            </div>
            <div className="bleftText">

            </div>
            <div className="socials">
                <div className="sImg">
                    <a target="_blank" href="mailto:kuroimeganegames@gmail.com"><img src={Email} alt="EmailImg"></img></a>
                </div>
                <div className="sImg">
                    <a target="_blank" href="https://twitter.com/KuroiMeganeDev"><img src={Twitter} alt="TwitterImg"></img></a>
                </div>
                <div className="sImg">
                    <a target="_blank" href=""><img src={Discord} alt="DiscordImg"></img></a>
                </div>
                <div className="sImg">
                    <a target="_blank" href="https://www.instagram.com/kuroimeganedev/"><img src={Instagram} alt="InstaImg"></img></a>
                </div>
            </div>
            <div className="maincard">
                <div className="cardContent">
                    <div className="logo">
                        <img src={Logo} alt="MeganeLogo"></img>
                    </div>
                    <div className="pagesBtn">
                        <Link to="/Main#About"><button className="homeBtn" href={Main}>About</button></Link>
                        <Link to="/Main#Projects"><button className="homeBtn" href={Main}>Games</button></Link>
                        <Link to="/Main#Contact"><button className="homeBtn" href={Main}>Contact</button></Link>
                    </div>
                    <div className="description">
                        {/* <p>Indie Game Dev based out of Texas.</p> */}
                    </div>
                    <div className="etcBelow">

                    </div>
                </div>
            </div>
        </main>
    )
}