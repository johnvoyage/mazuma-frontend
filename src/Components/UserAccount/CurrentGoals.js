import React from "react";
import {
  Segment,
  Table,
  Checkbox,
  Button,
  Icon,
  Input,
  Dropdown
} from "semantic-ui-react";

const CurrentGoals = () => {
  const timePeriod = [
    { key: "day(s)", text: "day(s)", value: "day(s)" },
    { key: "week(s)", text: "week(s)", value: "week(s)" },
    { key: "month(s)", text: "month(s)", value: "month(s)" },
    { key: "year(s)", text: "year(s)", value: "year(s)" }
  ];

  const editCell = (
    <Table.Cell
      onClick={() => console.log("edit goal!")}
      selectable
      textAlign="center"
    >
      {" "}
      <Icon name="pencil" />
    </Table.Cell>
  );

  const deleteCell = (
    <Table.Cell
      onClick={() => console.log("delete goal!")}
      selectable
      textAlign="center"
    >
      <Icon name="remove" />
    </Table.Cell>
  );

  return (
    <Segment>
      <h3>Current Goals:</h3>
      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" width={1}>
              Chart
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width={13}>
              Goal
            </Table.HeaderCell>
            <Table.HeaderCell width={1} />
            <Table.HeaderCell width={1} />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              Increase net worth by{"   "}
              <Input
                label="%"
                labelPosition="right"
                type="number"
                min="0.01"
                step="0.01"
                defaultValue="5"
              />
              {"   "}
              every
              {"   "}
              <Input
                label={<Dropdown defaultValue="day(s)" options={timePeriod} />}
                labelPosition="right"
                type="number"
                min="1"
                step="1"
                defaultValue="100"
              />
            </Table.Cell>
            {editCell}
            {deleteCell}
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              Increase assets by{"   "}
              <Input
                label="%"
                labelPosition="right"
                type="number"
                min="0.01"
                step="0.01"
                defaultValue="6"
              />
              {"   "}
              every
              {"   "}
              <Input
                label={<Dropdown defaultValue="day(s)" options={timePeriod} />}
                labelPosition="right"
                type="number"
                min="1"
                step="1"
                defaultValue="100"
              />
            </Table.Cell>
            {editCell}
            {deleteCell}
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              Increase liabilities by{"   "}
              <Input
                label="%"
                labelPosition="right"
                type="number"
                min="0.01"
                step="0.01"
                defaultValue="2.5"
              />
              {"   "}
              every
              {"   "}
              <Input
                label={<Dropdown defaultValue="day(s)" options={timePeriod} />}
                labelPosition="right"
                type="number"
                min="1"
                step="1"
                defaultValue="100"
              />
            </Table.Cell>
            {editCell}
            {deleteCell}
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              Keep net income above{"   "}
              <Input
                label="$"
                labelPosition="left"
                type="number"
                min="1"
                step="1"
                defaultValue="50"
              />
              {"   "}
              every
              {"   "}
              <Input
                label={<Dropdown defaultValue="day(s)" options={timePeriod} />}
                labelPosition="right"
                type="number"
                min="1"
                step="1"
                defaultValue="1"
              />
            </Table.Cell>
            {editCell}
            {deleteCell}
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              Keep income above{"   "}
              <Input
                label="$"
                labelPosition="left"
                type="number"
                step="1"
                defaultValue="100"
              />
              {"   "}
              every
              {"   "}
              <Input
                label={<Dropdown defaultValue="day(s)" options={timePeriod} />}
                labelPosition="right"
                type="number"
                min="1"
                step="1"
                defaultValue="1"
              />
            </Table.Cell>
            {editCell}
            {deleteCell}
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              Keep spending below{"   "}
              <Input
                label="$"
                labelPosition="left"
                type="number"
                step="1"
                defaultValue="35"
              />
              {"   "}
              every
              {"   "}
              <Input
                label={<Dropdown defaultValue="day(s)" options={timePeriod} />}
                labelPosition="right"
                type="number"
                min="1"
                step="1"
                defaultValue="1"
              />
            </Table.Cell>
            {editCell}
            {deleteCell}
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
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
