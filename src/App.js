import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import './index.css';

// components
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div>
      <Row>
        <Banner />
      </Row>
    </div>
  );
}

export default App;
