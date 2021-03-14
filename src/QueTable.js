import React from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class QueTable extends React.Component {
    state = {
      que: []
    }
    
    render() {
      return (
          <React.Fragment>
          <h1>Draft Queue</h1>
            <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Rank</Table.HeaderCell>
                <Table.HeaderCell>Player</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
  
            <Table.Body>  

          {this.state.que.map((que) => (
            <Table.Row>
                <Table.Cell>{ que.rank }</Table.Cell>
                <Table.Cell>{ que.name} ({ que.team }) { que.position }</Table.Cell>
            </Table.Row>
          ))}

            </Table.Body>

        </Table>
          </React.Fragment>
      );
    }
    
    componentDidMount() {
      const url = 'https://corycates.com/baseball/api/get_draft_data.php?type=que&mid=1';
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ que: data })
        console.log(this.state.que)
       })
    }
  
      
  }
  