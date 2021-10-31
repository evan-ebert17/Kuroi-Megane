import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    return (
        <div>
            <h1 className="porjHead">Projects</h1>

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
        </div>
    );
}