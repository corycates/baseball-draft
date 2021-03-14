import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const TableTeam = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Player</Table.HeaderCell>
        <Table.HeaderCell>Pos</Table.HeaderCell>
        <Table.HeaderCell>Round</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>sup
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

  </Table>
)

export default TableTeam