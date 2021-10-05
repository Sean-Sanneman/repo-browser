import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import './App.css';
import './index.css';

// components
import Banner from './components/Banner/Banner';

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
      
    <div>
      <Row>
        <Banner />
      </Row>
    </div>
    
    </ApolloProvider>
  );
}

export default App;
