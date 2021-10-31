import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

export default function About() {
    return (
        <div>
            <Container className="HomeHeader">
                <Row className="rowish">
                    <h1>Home Page</h1>
                </Row>
            </Container>
            <Col className="pBg">
                <div className="pBorder">
                    <p className="introPara">
                        YO!!!!!!!!!!
                    </p>
                </div>
            </Col>
        </div>
    );
}
