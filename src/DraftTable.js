import React from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class DraftTable extends React.Component {
    state = {
      draft: []
    }
    
    render() {
      return (
          <React.Fragment>
          <h1>Draft</h1>
            <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Pick</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
  
            <Table.Body>  

          {this.state.draft.map((draft) => (
            <Table.Row>
                <Table.Cell>{ draft.mid }</Table.Cell>
                <Table.Cell>{ draft.name} ({ draft.team }) { draft.position }</Table.Cell>
                <Table.Cell>{ draft.pick} @ {draft.picktime}</Table.Cell>                
            </Table.Row>
          ))}

            </Table.Body>

        </Table>
          </React.Fragment>
      );
    }
    
    componentDidMount() {
      const url = 'https://corycates.com/baseball/api/get_draft_data.php?type=draft';
      axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ draft: data })
        console.log(this.state.draft)
       })
    }
  
      
  }
  