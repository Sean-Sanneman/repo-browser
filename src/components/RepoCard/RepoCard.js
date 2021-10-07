import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './RepoCard.css'

const RepoCard = () => {

    const [name,setName] = useState('');
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
        const data = await response.json();
        console.log(data);

        for(let i = 0; i < data.length; i++) {
        setName(data[i].name);
        setLanguage(data[i].language);
        setDescription(data[i].description);
        setStarCount(data[i].stargazers_count);
        setForksCount(data[i].forks_count);
        setDate(data[i].created_at);
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