import React, { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './RepoCard.css'

const RepoCard = () => {

  useEffect(() => {
    const url = 'https://api.github.com/orgs/Netflix/repos'

    const fetchData = async () => {
      try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log('error', error);
    }
  };

  fetchData();  
  }, []);

    return (
        <>
          <Card border="none" style={{ width: '100%' }}>
    <Card.Header>Repo Name</Card.Header>
    <Card.Body>
      <Card.Text>Language: </Card.Text>
      <Card.Text>
      Get my claw stuck in the dog's ear mrow, nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws x, white cat sleeps on a black shirt. Bite plants kitty time swipe at owner's legs jump five feet high and sideways when a shadow moves meowwww. 
      </Card.Text>
      <Col>
      <Card.Text>Stars: </Card.Text>
      </Col>
      <Col>
      <Card.Text>Forked: </Card.Text>
      </Col>
      <Col>
      <Card.Text>Date Created: </Card.Text>
      </Col>
    </Card.Body>
  </Card>
        </>
    )
};

export default RepoCard;