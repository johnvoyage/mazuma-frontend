import React from 'react';
import { Form } from 'semantic-ui-react';
// import { connect } from 'react-redux';


const TimingFilter = (props) => {



  return(
    <Form>
      <Form.Group widths='equal'>
        <Form.Input
          type='hidden'
          width={6}
        />
        <label>As of...</label>
        <Form.Input
          fluid
          // label='First name'
          // placeholder='First name'
          type='date'
          width={4}
        />
        <Form.Input
          type='hidden'
          width={6}
        />
      </Form.Group>
    </Form>
  )


};

export default TimingFilter
