import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './RepoCard.css'

const RepoCard = () => {

    const [name,setName] = useState('');
    const [loading,setLoading] = useState(true);
    const [language,setLanguage]= useState('');
    const [description,setDescription] = useState('');
    const [starCount,setStarCount] = useState('');
    const [forksCount,setForksCount]= useState('');
    const [date, setDate] = useState('');

  useEffect(() => {
    const url = 'https://api.github.com/orgs/Netflix/repos'

    const fetchData = async () => {
    
      try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        for(let i = 0; i < json.length; i++) {
        setName(json[i].name);
        setLanguage(json[i].language);
        setDescription(json[i].description);
        setStarCount(json[i].stargazers_count);
        setForksCount(json[i].forks_count);
        setDate(json[i].created_at);
        }

      } catch (error) {
        console.log('error', error);

        
    }
  };

  fetchData();  
  }, []);

    return (
        <>
          <Card border="none" style={{ width: '100%' }}>
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
    </Card.Body>
  </Card>
      </>  
    )
};

export default RepoCard;