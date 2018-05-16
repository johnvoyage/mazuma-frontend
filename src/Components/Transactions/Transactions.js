import React from "react";
import { connect } from "react-redux";
import TransactionsTopRow from "./TransactionsTopRow";
import TransactionsTable from "./TransactionsTable";
import TransactionsFilter from "./TransactionsFilter";
import NewTransactionForm from "./NewTransactionForm";
import NewAccountForm from "./NewAccountForm";

const Transactions = props => {
  const renderFilter = filterSelected => {
    switch (filterSelected) {
      case "view transactions":
        return (
          <div>
            {props.showFilters ? <TransactionsFilter /> : null}
            <TransactionsTable />
          </div>
        );

      case "new transaction":
        return <NewTransactionForm />;
      case "new account":
        return <NewAccountForm />;
      default:
        return "Bug in Transactions > renderFilter";
    }
  };

  return (
    <div>
      <TransactionsTopRow />
      {renderFilter(props.topRow)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showFilters: state.transactionContainer.showFilters,
    topRow: state.transactionContainer.topRow
  };
};

export default connect(mapStateToProps, null)(Transactions);
