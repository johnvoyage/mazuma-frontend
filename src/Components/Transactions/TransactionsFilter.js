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
    let filterVal;
    const filterName = event.target.name
      ? event.target.name
      : "accountsIncluded";

    if (event.target.value) {
      filterVal = event.target.value;
    } else {
      filterVal = [...props.transactionFilters.accountsIncluded];
      event.key === "Enter"
        ? filterVal.push(
            event.target.parentElement.children[0].children[
              event.target.parentElement.children[0].children.length - 4
            ].innerText
          )
        : event.target.innerText
          ? filterVal.push(event.target.innerText)
          : filterVal.length === 1
            ? (filterVal.length = 0)
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
            value={props.transactionFilters.numMin}
            width={4}
          />
          <Form.Input
            name="numMax"
            onChange={handleChange}
            label="and ≤ ..."
            type="number"
            min="1"
            step="1"
            value={props.transactionFilters.numMax}
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
            value={props.transactionFilters.amountMax}
            width={4}
          />
          <Form.Input
            name="amountMax"
            onChange={handleChange}
            label="and ≤ ..."
            type="number"
            min="0.01"
            step="0.01"
            value={props.transactionFilters.amountMax}
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
            value={props.transactionFilters.dateMin}
            width={4}
          />
          <Form.Input
            name="dateMax"
            onChange={handleChange}
            label="and..."
            type="date"
            value={props.transactionFilters.dateMax}
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
            value={props.transactionFilters.description}
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
