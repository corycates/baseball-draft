import React from 'react'
import axios from 'axios'

export default class TeamAPITest extends React.Component {
    state = {
      team: []
    }
    
    render() {
      return (
          <React.Fragment>
          <h1>Team</h1>
          <table border='1' width='100%' >
          <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Position</th>
          </tr>
  
          {this.state.team.map((team) => (
          <tr>
              <td>{ team.name }</td>
              <td>{ team.team }</td>
              <td>{ team.position }</td>
          </tr>
          ))}
          </table>
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
  