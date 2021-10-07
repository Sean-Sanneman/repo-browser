import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import '../../index.css';
import '../../App.css';
import './Browser.css';

import RepoCard from '../RepoCard/RepoCard';


const Browser = () => {
    // state for holding api data
    const [searchedRepos, setSearchedRepos] = useState([]);

    useEffect(() => {
		const url = 'https://api.github.com/orgs/Netflix/repos';

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				const repoData = data.map((repo) => ({
					id: repo.id,
					name: repo.name,
					language: repo.language,
					description: repo.description,
					starCount: repo.stargazers_count,
					forksCount: repo.forks_count,
					date: repo.created_at,
				}));

				setSearchedRepos(repoData);
				console.log('searchedRepos', searchedRepos);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, []);


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


        {searchedRepos.map((repo) => (
							<RepoCard key={repo.id} repoInfo={repo} />
						))}
            
            </Container>
            </Col>
            </Row>
            
        </>
    );

};

export default Browser;