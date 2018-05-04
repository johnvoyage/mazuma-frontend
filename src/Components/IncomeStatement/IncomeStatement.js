import React from "react";
import Spending from "./Spending";
import Earning from "./Earning";
import TimingFilter from "./TimingFilter";
import { Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import formatNumber from "../../HelperFunctions/formatNumber";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";

const subcategories = [8, 9];

const IncomeStatement = props => {
  // const amountOfEntriesGivenSubcategories = arrayOfSubcategoryIds => {
  //   const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
  //     arrayOfSubcategoryIds,
  //     props.accounts
  //   );
  //   return formatNumber.withoutCents(
  //     -financialStatementHelpers
  //       .mapTransactionsOfEntries(
  //         financialStatementHelpers.filterEntriesWithinDateRange(
  //           props.entries,
  //           props.beginDate,
  //           props.endDate
  //         )
  //       )
  //       .reduce((aggr, arrayOfTransactions) => {
  //         arrayOfTransactions.forEach(transaction => {
  //           return accountIdsOfSubcategoriesArray.indexOf(
  //             transaction.account_id
  //           ) > -1
  //             ? (aggr += parseFloat(transaction.amount))
  //             : null;
  //         });
  //         return aggr;
  //       }, 0),
  //     " $ "
  //   );
  // };
  return (
    <div>
      <TimingFilter />
      <Header size="huge" textAlign="center">
        Net Income:
        {formatNumber.withoutCents(
          financialStatementHelpers.amountOfEntriesGivenSubcategories(
            subcategories,
            props.accounts,
            props.entries,
            props.beginDate,
            props.endDate
          ),
          " $ "
        )}
      </Header>
      <Segment>
        <Earning />
        <Spending />
      </Segment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // showLiquid
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries,
    beginDate: state.netIncomeContainer.beginDate,
    endDate: state.netIncomeContainer.endDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
    //   // },
    //   toggleTermsAgreement: () => {
    //     dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
    //   },
    //   signUserUp: (userInfo) => {
    //     console.log(userInfo)
    //     dispatch({ type: 'SIGN_USER_UP', userInfo })
    //   }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeStatement);
