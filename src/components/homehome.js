import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../assets/glassesShine.png';
import Email from '../assets/Memail.png';
import Discord from '../assets/Miiscord.png';
import Instagram from '../assets/miistagram.png';
import Twitter from '../assets/Mwiitter.png';
import Main from "./components/main";


export default function Homehome() {
    return (
        <main className="tbd">
            <div className="background">

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
                    <img className="logo" src={Logo}></img>
                    <div className="description">

                    </div>
                    <div className="pagesBtn">
                        <button>About</button>
                        <button>Games</button>
                        <button>Contact</button>
                    </div>
                    <div className="etcBelow">

                    </div>
                </div>
            </div>
        </main>
    )
}