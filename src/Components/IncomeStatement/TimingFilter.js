import React from 'react';
import { Form, Input } from 'semantic-ui-react';
// import { connect } from 'react-redux';


const TimingFilter = (props) => {



  return(
    <Form>
      <Form.Group>
        <Form.Field inline>
          <Input type='hidden'/>
        </Form.Field>
        <Form.Field inline>
          <label>Between...</label>
          <Input type='date'/>
        </Form.Field>
        <Form.Field inline>
          <label>and...</label>
          <Input type='date'/>
        </Form.Field>
        <Form.Field inline>
          <Input type='hidden'/>
        </Form.Field>
      </Form.Group>
    </Form>
  )


};

export default TimingFilter
