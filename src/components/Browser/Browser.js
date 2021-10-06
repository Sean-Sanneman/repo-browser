import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import '../../index.css';
import '../../App.css';
import './Browser.css';

import '../RepoCard/RepoCard';
import RepoCard from '../RepoCard/RepoCard';

const Browser = () => {

    return (
        <>
        <Row>
            <Col xs={12}>
        <Container className="broGlass">

        <Row>
         <h2> Repo Browser </h2>
        </Row>

        <Row>
            <Col xs={10}>
                <h3 className="justify-content-left text">Organization: Netflix</h3>
            </Col>
            <Col xs={2}>
            <Button variant="outline-light searchBtn glow-on-hover">Press Me</Button>{' '}
            </Col>
        </Row>
        <br />
        <br />

        <RepoCard />


            
            </Container>
            </Col>
            </Row>
            
        </>
    )

};

export default Browser;