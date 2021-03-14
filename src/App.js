//import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react';
 
//import Login from './Login';
import TableTeam from './TableTeam';
import TeamAPITest from './TeamAPITest';
 
const App = () => (
  <Fragment>
  <Container>
    <TeamAPITest />
  </Container>
  <Container>
    <TableTeam />
  </Container>
  </Fragment>
);
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save often then reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
