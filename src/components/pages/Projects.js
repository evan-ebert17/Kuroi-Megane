import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    return (
            <div className="tRight">
            <Container>
                <header>
                    <div>
                        <h1 className="projHead">Projects</h1>
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