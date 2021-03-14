import React from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class PlayerTable extends React.Component {
    state = {
      players: []
    }
    
    render() {
      return (
          <React.Fragment>
          <h1>Players</h1>
            <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Rank</Table.HeaderCell>
                <Table.HeaderCell>GP/GS</Table.HeaderCell>
                <Table.HeaderCell>Total FP</Table.HeaderCell>
                <Table.HeaderCell>FP Avg</Table.HeaderCell>
                <Table.HeaderCell>IP/Avg</Table.HeaderCell>
                <Table.HeaderCell>W/R</Table.HeaderCell>
                <Table.HeaderCell>L/RBI</Table.HeaderCell>
                <Table.HeaderCell>S/HR</Table.HeaderCell>
                <Table.HeaderCell>QS/SB</Table.HeaderCell>
                <Table.HeaderCell>ERA/OBP</Table.HeaderCell>
                <Table.HeaderCell>WHIP/SLG</Table.HeaderCell>
                <Table.HeaderCell>K/9/K</Table.HeaderCell>
                <Table.HeaderCell>Proj FP</Table.HeaderCell>
                <Table.HeaderCell>Proj Avg</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
  
            <Table.Body>  

          {this.state.players.map((players) => (
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

        </Table>
          </React.Fragment>
      );
    }
    
    componentDidMount() {
      const url = 'https://corycates.com/baseball/api/get_draft_data.php?type=players&pos=A&limit=50';
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ players: data })
        console.log(this.state.players)
       })
    }
  
      
  }
  