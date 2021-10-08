import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Fade } from 'react-bootstrap';
import './RepoCard.css'



const RepoCard = ({ repoInfo }) => {
  const { name, language, description, starCount, forksCount, date, commitList } = repoInfo;
  const [open, setOpen] = useState(false);

    return (
        <>
          <Card border="none" style={{ width: '90%', margin: '2%' }}>
    <Card.Header>{name}</Card.Header>
    <Card.Body>
      <Card.Text>Language: {language}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <Col>
      <Card.Text>Stars: {starCount} </Card.Text>
      </Col>
      <Col>
      <Card.Text>Forked: {forksCount} </Card.Text>
      </Col>
      <Col>
      <Card.Text>Date Created: {date} </Card.Text>
      </Col>
      
      <Col>
      <Card.Text>
      <Button
        className="togBut"
        variant="outline-dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        style={{marginTop:'2%', border: 'none', textDecoration: 'none'}}
      >
        Recent Commits
      </Button>
      <Fade in={open}>
        <div className='comBox'> 
        {commitList}
        </div>
      </Fade>
      </Card.Text>
      </Col>
    </Card.Body>
  </Card>
      </>  
    );
};

export default RepoCard;