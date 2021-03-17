import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import _ from 'lodash'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'DATA_LOAD':
      return {
        ...state,
        players: action.players,
      }

    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          players: state.players.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        players: _.sortBy(state.players, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function PlayerTable() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    players:  [],
    direction: null,
  });
  const { column, players, direction } = state;
  //const [data, setData] = useState({ players: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://corycates.com/baseball/api/get_draft_data.php?type=players&pos=A&limit=50',
    );
 
    dispatch({ type: 'DATA_LOAD', players: result.data })
  }, []);
  
      return (
          <React.Fragment>
          <h1>Players</h1>
            <Table sortable celled striped>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell 
                  sorted={state.column === 'name' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}>
                  Player</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 'rank' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'rank' })}>
                  Rank</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 'name' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}>
                  GP/GS</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 'tp' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'tp' })}>Total FP</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 'avg' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'avg' })}>FP Avg</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's1' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's1' })}>IP/Avg</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's2' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's2' })}>W/R</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's3' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's3' })}>L/RBI</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's4' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's4' })}>S/HR</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's5' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's5' })}>QS/SB</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's6' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's6' })}>ERA/OBP</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's7' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's7' })}>WHIP/SLG</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 's8' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 's8' })}>K/9/K</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 'rt' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'rt' })}>Proj FP</Table.HeaderCell>
                <Table.HeaderCell 
                  sorted={state.column === 'avg_proj' ? state.direction : null}
                  onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'avg_proj' })}>Proj Avg</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
  
            <Table.Body>  

          {state.players.map((players) => (
            <Table.Row>
                <Table.Cell><a href={'https://sports.yahoo.com/mlb/players/'+players.id+'/'} target="_blank">{ players.name } ({ players.team }) { players.position } </a></Table.Cell>
                <Table.Cell>{ players.rank }</Table.Cell>
                <Table.Cell>{ players.gp }</Table.Cell>
                <Table.Cell>{ players.tp }</Table.Cell>
                <Table.Cell>{ players.avg }</Table.Cell>
                <Table.Cell>{ players.s1 }</Table.Cell>
                <Table.Cell>{ players.s2 }</Table.Cell>
                <Table.Cell>{ players.s3 }</Table.Cell>
                <Table.Cell>{ players.s4 }</Table.Cell>
                <Table.Cell>{ players.s5 }</Table.Cell>
                <Table.Cell>{ players.s6 }</Table.Cell>
                <Table.Cell>{ players.s7 }</Table.Cell>
                <Table.Cell>{ players.s8 }</Table.Cell>
                <Table.Cell>{ players.rt }</Table.Cell>
                <Table.Cell>{ players.avg_proj }</Table.Cell>
            </Table.Row>
          ))}

            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
        </Table>
          </React.Fragment>
      );
    
    
/*     function componentDidMount() {
      const url = 'https://corycates.com/baseball/api/get_draft_data.php?type=players&pos=A&limit=50';
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ players: data })
        console.log(this.state.players)
       })
    } */
  
  }
  
  export default PlayerTable;