import React from "react";
import { Segment, Table, Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { subcategoryIdToName } from "../../StaticOptions/subcategories";

const UserAccounts = props => {
  const renderRows = () => {
    return props.accounts
      .filter(
        account => props.accountsToShow.indexOf(account.subcategory_id) > -1
      )
      .map((account, index) => {
        return (
          <Table.Row key={index}>
            <Table.Cell>{account.name}</Table.Cell>
            <Table.Cell>
              {subcategoryIdToName(account.subcategory_id).toUpperCase()}
            </Table.Cell>
            <Table.Cell>
              {account.description
                ? account.description.toUpperCase()
                : "NO DESCRIPTION"}
            </Table.Cell>
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
        );
      });
  };

  const handleAccountTypeClick = accountsToShow => {
    props.changeAccountsToShow(accountsToShow);
  };

  const handleChevronClick = leftOrRight => {
    switch (props.accountsToShow.toString()) {
      case "1,2,3,4,5,6,8,9":
        leftOrRight === "left"
          ? props.changeAccountsToShow([9])
          : props.changeAccountsToShow([1, 2, 3, 4]);
        break;
      case "1,2,3,4":
        leftOrRight === "left"
          ? props.changeAccountsToShow([1, 2, 3, 4, 5, 6, 8, 9])
          : props.changeAccountsToShow([5, 6]);
        break;
      case "5,6":
        leftOrRight === "left"
          ? props.changeAccountsToShow([1, 2, 3, 4])
          : props.changeAccountsToShow([8]);
        break;
      case "8":
        leftOrRight === "left"
          ? props.changeAccountsToShow([5, 6])
          : props.changeAccountsToShow([9]);
        break;
      case "9":
        leftOrRight === "left"
          ? props.changeAccountsToShow([8])
          : props.changeAccountsToShow([1, 2, 3, 4, 5, 6, 8, 9]);
        break;
      default:
        props.changeAccountsToShow([1, 2, 3, 4, 5, 6, 8, 9]);
    }
  };

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

        <Table.Body>{renderRows()}</Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item
                  onClick={() => handleChevronClick("left")}
                  as="a"
                  icon
                >
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item
                  active={props.accountsToShow.length === 8}
                  onClick={() =>
                    handleAccountTypeClick([1, 2, 3, 4, 5, 6, 8, 9])
                  }
                  as="a"
                >
                  All
                </Menu.Item>
                <Menu.Item
                  active={props.accountsToShow.length === 4}
                  onClick={() => handleAccountTypeClick([1, 2, 3, 4])}
                  as="a"
                >
                  Assets
                </Menu.Item>
                <Menu.Item
                  active={props.accountsToShow.length === 2}
                  onClick={() => handleAccountTypeClick([5, 6])}
                  as="a"
                >
                  Liabilities
                </Menu.Item>
                <Menu.Item
                  active={
                    props.accountsToShow.length === 1 &&
                    props.accountsToShow[0] === 8
                  }
                  onClick={() => handleAccountTypeClick([8])}
                  as="a"
                >
                  Income
                </Menu.Item>
                <Menu.Item
                  active={
                    props.accountsToShow.length === 1 &&
                    props.accountsToShow[0] === 9
                  }
                  onClick={() => handleAccountTypeClick([9])}
                  as="a"
                >
                  Spending
                </Menu.Item>
                <Menu.Item
                  onClick={() => handleChevronClick("right")}
                  as="a"
                  icon
                >
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

const mapStateToProps = state => {
  return {
    accounts: state.userInfo.accounts,
    accountsToShow: state.accountContainer.accountsToShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAccountsToShow: accountsToShow => {
      dispatch({ type: "CHANGE_ACCOUNTS_TO_SHOW", accountsToShow });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccounts);
