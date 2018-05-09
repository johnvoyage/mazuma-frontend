import React from "react";
import { connect } from "react-redux";
import { Segment, Form, Dropdown } from "semantic-ui-react";

const TransactionsFilter = props => {
  const options = props.accounts.map(account => {
    return {
      key: account.name,
      text: account.name.toUpperCase(),
      value: account.name
    };
  });

  const handleChange = event => {
    // debugger;

    let filterVal;

    const filterName = event.target.name
      ? event.target.name
      : "accountsIncluded";

    if (event.target.value) {
      filterVal = event.target.value;
    } else {
      // console.log(event.target.innerText);
      // console.log(event.target.parentElement.innerText);
      // debugger;
      debugger;
      filterVal = [...props.transactionFilters.accountsIncluded];
      // console.log(filterVal);
      event.key === "Enter"
        ? event.target.parentElement.children[0].children[
            event.target.parentElement.children[0].children.length - 3
          ].innerText
        : event.target.innerText
          ? filterVal.push(event.target.innerText)
          : filterVal.splice(
              filterVal.indexOf(event.target.parentElement.innerText),
              1
            );
    }

    props.changeTransactionFilter(filterName, filterVal);
  };

  return (
    <Segment>
      <Form>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input
            name="numMin"
            onChange={handleChange}
            label="Transaction # ≥ ..."
            type="number"
            min="1"
            step="1"
            width={4}
          />
          <Form.Input
            name="numMax"
            onChange={handleChange}
            label="and ≤ ..."
            type="number"
            min="1"
            step="1"
            width={4}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input
            name="amountMin"
            onChange={handleChange}
            label="$ Amount  ≥ ... "
            type="number"
            min="0.01"
            step="0.01"
            width={4}
          />
          <Form.Input
            name="amountMax"
            onChange={handleChange}
            label="and ≤ ..."
            type="number"
            min="0.01"
            step="0.01"
            width={4}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input
            name="dateMin"
            onChange={handleChange}
            label="Dated between..."
            type="date"
            width={4}
          />
          <Form.Input
            name="dateMax"
            onChange={handleChange}
            label="and..."
            type="date"
            width={4}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>

        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input label="Includes account(s)..." type="hidden" width={8}>
            <Dropdown
              id="accountsIncluded"
              onChange={handleChange}
              placeholder="Accounts..."
              fluid
              multiple
              selection
              options={options}
            />
          </Form.Input>
          <Form.Input type="hidden" width={4} />
        </Form.Group>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input
            name="descriptionFilter"
            onChange={handleChange}
            label="Description includes..."
            width={8}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
      </Form>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    transactionFilters: state.transactionContainer.transactionFilters,
    accounts: state.userInfo.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTransactionFilter: (filterName, filterVal) => {
      dispatch({ type: "CHANGE_TRANSACTION_FILTER", filterName, filterVal });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsFilter);
