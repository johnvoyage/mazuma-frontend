import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'


const Liabilities = (props) => {
  return(
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <h3>Liabilities</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Short-term liabilities
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Long-term liabilities
        </Grid.Column>

      </Grid.Row>

    </Grid>
  )
}

export default Liabilities
