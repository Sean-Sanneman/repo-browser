import { Card, Col } from 'react-bootstrap';
import './RepoCard.css'

import Commits from '../Commits/Commits';

const RepoCard = ({ repoInfo }) => {
  const { name, language, description, starCount, forksCount, date } = repoInfo;


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
        <Commits />
      </Card.Text>
      </Col>
    </Card.Body>
  </Card>
      </>  
    );
};

export default RepoCard;