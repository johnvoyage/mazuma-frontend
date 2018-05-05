// import faker from 'faker'
// import _ from 'lodash'
import React from "react";
import { Segment, Table, Checkbox, Button, Icon } from "semantic-ui-react";

const CurrentGoals = () => {
  return (
    <Segment>
      <h3>Current Goals:</h3>
      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>Chart</Table.HeaderCell>
            <Table.HeaderCell width={12}>Goal</Table.HeaderCell>
            <Table.HeaderCell width={1}>Hit?</Table.HeaderCell>
            <Table.HeaderCell width={1} />
            <Table.HeaderCell width={1} />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>GOAL SENTENCE</Table.Cell>
            <Table.Cell>DATE? Y/N?</Table.Cell>
            <Table.Cell
              onClick={() => console.log("edit goal!")}
              selectable
              textAlign="center"
            >
              <Icon name="pencil" />
            </Table.Cell>
            <Table.Cell
              onClick={() => console.log("delete goal!")}
              selectable
              textAlign="center"
            >
              <Icon name="remove" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>GOAL SENTENCE</Table.Cell>
            <Table.Cell>DATE? Y/N?</Table.Cell>
            <Table.Cell
              onClick={() => console.log("edit goal!")}
              selectable
              textAlign="center"
            >
              <Icon name="pencil" />
            </Table.Cell>
            <Table.Cell
              onClick={() => console.log("delete goal!")}
              selectable
              textAlign="center"
            >
              <Icon name="remove" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>GOAL SENTENCE</Table.Cell>
            <Table.Cell>DATE? Y/N?</Table.Cell>
            <Table.Cell
              onClick={() => console.log("edit goal!")}
              selectable
              textAlign="center"
            >
              <Icon name="pencil" />
            </Table.Cell>
            <Table.Cell
              onClick={() => console.log("delete goal!")}
              selectable
              textAlign="center"
            >
              <Icon name="remove" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add User
              </Button>
              <Button size="small">Chart All</Button>
              <Button size="small">Chart None</Button>

              <Button disabled size="small">
                Save Charting
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

export default CurrentGoals;
