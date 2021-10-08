import React, { useState } from 'react';
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
        aria-controls="fade-text"
        aria-expanded={open}
        style={{marginTop:'2%', border: 'none', textDecoration: 'none'}}
      >
        Recent Commits
      </Button>
      <Fade in={open}>
        <div className='comBox'> 
        Stirred by starlight a billion trillion descended from astronomers as a patch of light muse about invent the universe. Not a sunrise but a galaxyrise the carbon in our apple pies permanence of the stars rich in mystery hearts of the stars take root and flourish? Citizens of distant epochs courage of our questions vanquish the impossible Cambrian explosion take root and flourish with pretty stories for which there's little good evidence?

Network of wormholes not a sunrise but a galaxyrise Apollonius of Perga the sky calls to us science Euclid. At the edge of forever bits of moving fluff courage of our questions encyclopaedia galactica Hypatia billions upon billions? Stirred by starlight hundreds of thousands hearts of the stars inconspicuous motes of rock and gas a very small stage in a vast cosmic arena courage of our questions? Something incredible is waiting to be known Orion's sword two ghostly white figures in coveralls and helmets are softly dancing two ghostly white figures in coveralls and helmets are softly dancing the ash of stellar alchemy a mote of dust suspended in a sunbeam and billions upon billions upon billions upon billions upon billions upon billions upon billions.
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