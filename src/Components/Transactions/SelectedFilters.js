import React from 'react';
import { Button, Checkbox, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';


const SelectedFilters = (props) => {

  return(
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
              <Checkbox
                label='Descriptions'
                toggle
                checked={props.descriptionToggle}
                onChange={props.toggleTransactionDescription}
              />
          </Grid.Column>
          <Grid.Column width={8}>
              <Button.Group attached='top' floated='left'>
                <Button
                  name='none'
                  toggle
                  active={props.filterSelected === 'none'}
                  content='No Filters'
                  onClick={props.toggleTransactionFilter}
                />
                <Button.Or/>
                <Button
                  name='quick'
                  toggle
                  active={props.filterSelected === 'quick'}
                  content='Quick Filters'
                  onClick={props.toggleTransactionFilter}
                />
                <Button.Or/>
                <Button
                  name='custom'
                  toggle
                  active={props.filterSelected === 'custom'}
                  content='Custom Filters'
                  onClick={props.toggleTransactionFilter}
                />
              </Button.Group>
          </Grid.Column>
          <Grid.Column width={6}>
              <Button.Group attached='top' floated='right'>
                <Button
                  toggle
                  active={props.newTransaction}
                  onClick={props.toggleNewTransaction}
                  content='New Transaction'
                />
              </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )

};

const mapStateToProps = (state) => {
  return {
    descriptionToggle: state.transactionContainer.descriptionToggle,
    newTransaction: state.transactionContainer.newTransaction,
    filterSelected: state.transactionContainer.filterSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTransactionDescription: () => {
      dispatch({ type: 'TOGGLE_TRANSACTION_DESCRIPTION' })
    },
    toggleTransactionFilter: (event) => {
      dispatch({ type: 'TOGGLE_TRANSACTION_FILTER', filterSelected: event.target.name })
    },
    toggleNewTransaction: () => {
      dispatch({ type: 'TOGGLE_NEW_TRANSACTION' })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedFilters);
