import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';


const TimingFilter = (props) => {



  return(
    <Form>
      <Form.Group widths='equal'>
        <label>Beginning...</label>
        <Form.Input
          fluid
          // label='First name'
          // placeholder='First name'
          type='date'
        />
        <label>Ending...</label>
        <Form.Input
          fluid
          // label='Last name'
          // placeholder='Last name'
          type='date'
        />
      </Form.Group>
    </Form>
  )


};

export default TimingFilter
