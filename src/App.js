import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import './App.css';
import './index.css';

// components
import Browser from './components/Browser/Browser';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {


  return (
    <ApolloProvider client={client}>

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
            <Button variant="outline-light glow-on-hover">Press Me</Button>
            

            </Col>
        </Row>
        <br />
        <br />
    <div>
      <Row>
        <Browser />
      </Row>
    </div>

    </Container>
            </Col>
            </Row>
  
    </ApolloProvider>
  );
}



export default App;
