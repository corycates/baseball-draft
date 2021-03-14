import React from 'react'
import axios from 'axios'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class DraftTable extends React.Component {
    state = {
      draft: [],
      teams: [],
    }
    
    getTeamName(mid) {
      for (var i = 0; i< 12; i++) {
        if (this.state.teams[i]) {
          if (this.state.teams[i].mid == mid) {
          var label = this.state.teams[i].team;
          if ( this.state.teams[i].autodraft == 1) label = label + "*";
          return label;

          } 
        }
      }
      return "";
    }
    //updateTeamNames() {
      //console.log(this.state.teams);

      //this.state.teams.foreach(function(team){
       // var label = team.team;
        //if (team.autodraft == 1) label = label + "*";
        //this.state.TeamNames[team.mid] = label;
      //});
    //}

    render() {
      //Fillout draft Team info
      for (var i=0; i<this.state.draft.length-1;i++){
        this.state.draft[i]["teamname"] = this.getTeamName(this.state.draft[i].mid);
      }

      return (
          <React.Fragment>
          <h1>Draft</h1>
            <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Pick</Table.HeaderCell>
                <Table.HeaderCell>Round</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
  
            <Table.Body>  

          {this.state.draft.map((draft) => (
            <Table.Row>
                <Table.Cell>{ draft.teamname }</Table.Cell>
                <Table.Cell>{ draft.name} ({ draft.team }) { draft.position }</Table.Cell>
                <Table.Cell>{ draft.pick} @ { draft.picktime}</Table.Cell>      
                <Table.Cell>{ Math.floor(draft.pick / 12) + 1 }</Table.Cell>          
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

       const url2 = 'https://corycates.com/baseball/api/get_draft_data.php?type=teamnames';
       axios.get(url2).then(response => response.data)
       .then((data) => {
         this.setState({ teams: data });
         console.log(this.state.teams);
         
        })    
    }
  
      
  }
  