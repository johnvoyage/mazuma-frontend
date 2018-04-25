const initialState = {
  activeMenuItem: null,
  userInfo: {
    id: null,
    email: null,
  },
  transactionContainer: {
    descriptionToggle: true,
    filterSelected: 'none',
    newTransaction: false,
    formDebitFields: 1,
    formCreditFields: 1,
  },
  spendingContainer: {

  },
  netWorthContainer: {
    assets: {
      showSubCategories: {
        showLiquid: true,
        showTangible: true,
        showIntangible: true,
        showLongTerm: true,
      },
      showAccounts: {
        showLiquid: true,
        showTangible: true,
        showIntangible: true,
        showLongTerm: true,
      }
    },
    liabilities: {
      showSubCategories: true,
      showAccounts: false,
    },

  },

};

export default initialState;
