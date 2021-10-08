import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
                console.log(data)
				const repoData = data.map((repo) => ({
					id: repo.id,
					name: repo.name,
					language: repo.language,
					description: repo.description,
					starCount: repo.stargazers_count,
					forksCount: repo.forks_count,
                    date: repo.created_at,
                    commitList: repo.commits_url,
                }));

                repoData.sort(function(a,b){
                    return b.starCount - a.starCount
                });

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

        <Container className='cardBox'>
        {searchedRepos.map((repo) => (
							<RepoCard key={repo.id} repoInfo={repo} />
						))}
        </Container>
                   
        </>
    );
};

export default Browser;