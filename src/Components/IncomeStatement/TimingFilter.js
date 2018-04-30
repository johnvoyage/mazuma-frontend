import React from 'react';
import { Form } from 'semantic-ui-react';
// import { connect } from 'react-redux';


const TimingFilter = (props) => {



  return(
    <Form>
      <Form.Group widths='equal'>
        <Form.Input
          type='hidden'
          width={3}
        />
        <label>Beginning...</label>
        <Form.Input
          fluid
          // label='First name'
          // placeholder='First name'
          type='date'
          width={4}
        />
        <Form.Input
          type='hidden'
          width={2}
        />
        <label>Ending...</label>
        <Form.Input
          fluid
          // label='Last name'
          // placeholder='Last name'
          type='date'
          width={4}

        />
        <Form.Input
          type='hidden'
          width={3}
        />
      </Form.Group>
    </Form>
  )


};

export default TimingFilter
