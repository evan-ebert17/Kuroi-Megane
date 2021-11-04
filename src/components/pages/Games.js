import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

export default function Games() {
    return (
            <div className="components">
            <Container  className="content">
                <header>
                    <div>
                        <h1 className="projHead">Games</h1>
                    </div>
                </header>
                <div className="container">
                    <img
                        // src={Proj3img}
                        alt="React Portfolio Generator" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                        <div className="text">
                            <a alt="Portfolio Github" target="_blank" href="https://github.com/mwallis5110/React_Portfolio_Generator">
                                {/* <img src={GithubIcon} className="github"></img> */}
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
            </div>
    );
}