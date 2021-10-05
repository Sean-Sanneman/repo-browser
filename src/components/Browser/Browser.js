import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import '../../index.css';
import '../../App.css';
import './Browser.css';

const Browser = () => {

    return (
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

<Row style={{ paddingTop: '36px', borderRadius:'12px', }}>
  <Table striped hover>
  <thead>
    <tr>
      <th>Repo Name</th>
      <th>Language</th>
      <th>Description</th>
      <th>Star Count</th>
      <th>Fork Count</th>
      <th>Date Created</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Plasma</td>
      <td>GoLang</td>
      <td>Very Neat</td>
      <td>100</td>
      <td>5</td>
      <td>Jan, 1st</td>
    </tr>
  </tbody>
</Table>
        </Row>
            
            </Container>
            </Col>
            </Row>
            
        
    )

};

export default Browser;