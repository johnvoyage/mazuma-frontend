import React from 'react';
import { Button, Checkbox, Grid } from 'semantic-ui-react';
// import { connect } from 'react-redux';


const SelectedFilters = (props) => {


  return(
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
              <Checkbox
                defaultChecked
                label='Descriptions'
                toggle
              />
          </Grid.Column>
          <Grid.Column width={8}>
              <Button.Group attached='top' floated='left'>
                <Button toggle active={true}>No Filters</Button>
                <Button.Or/>
                <Button toggle active={false}>Quick Filters</Button>
                <Button.Or/>
                <Button toggle active={false}>Custom Filters</Button>
              </Button.Group>
          </Grid.Column>
          <Grid.Column width={6}>
              <Button.Group attached='top' floated='right'>
                <Button>New Transaction</Button>
              </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )

}

export default SelectedFilters
