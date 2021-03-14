import React from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class TeamAPITest extends React.Component {
    state = {
      team: []
    }
    
    render() {
      return (
          <React.Fragment>
          <h1>Team Roster</h1>
            <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Pos</Table.HeaderCell>
                <Table.HeaderCell>Round</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
  
            <Table.Body>  

          {this.state.team.map((team) => (
            <Table.Row>
                <Table.Cell>{ team.name }</Table.Cell>
                <Table.Cell>{ team.team }</Table.Cell>
                <Table.Cell>{ team.position }</Table.Cell>
            </Table.Row>
          ))}

            </Table.Body>

        </Table>
          </React.Fragment>
      );
    }
    
    componentDidMount() {
      const url = 'https://corycates.com/baseball/api/get_draft_data.php?type=team&mid=1';
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ team: data })
        console.log(this.state.team)
       })
    }
  
      
  }
  