//import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react';
 
//import Login from './Login';
import RosterTable from './RosterTable';
import QueTable from './QueTable';
import DraftTable from './DraftTable';
import PlayerTable from './PlayerTable';
 
const App = () => (
  <Fragment>
  <Container>
    <PlayerTable />
  </Container>
  <Container>
    <RosterTable />
  </Container>
  <Container>
    <QueTable />
  </Container> 
  <Container>
    <DraftTable />
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
