import React from "react";
import { Segment, Table, Menu, Icon } from "semantic-ui-react";

const UserAccounts = () => {
  return (
    <Segment>
      <h3>Accounts</h3>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={4} textAlign="center">
              Account Name
            </Table.HeaderCell>
            <Table.HeaderCell width={4} textAlign="center">
              Subcategory
            </Table.HeaderCell>
            <Table.HeaderCell width={6} textAlign="center">
              Description
            </Table.HeaderCell>
            <Table.HeaderCell width={1} />
            <Table.HeaderCell width={1} />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell
              onClick={() => console.log("edit account!")}
              selectable
              textAlign="center"
            >
              <Icon name="pencil" />
            </Table.Cell>
            <Table.Cell
              onClick={() => console.log("delete account!")}
              selectable
              textAlign="center"
            >
              <Icon name="remove" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell
              onClick={() => console.log("edit account!")}
              selectable
              textAlign="center"
            >
              <Icon name="pencil" />
            </Table.Cell>
            <Table.Cell
              onClick={() => console.log("delete account!")}
              selectable
              textAlign="center"
            >
              <Icon name="remove" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell
              onClick={() => console.log("edit account!")}
              selectable
              textAlign="center"
            >
              <Icon name="pencil" />
            </Table.Cell>
            <Table.Cell
              onClick={() => console.log("delete account!")}
              selectable
              textAlign="center"
            >
              <Icon name="remove" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">All</Menu.Item>
                <Menu.Item as="a">Liquid Assets</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

export default UserAccounts;
