import React from 'react';
import { Segment, Form, Select, TextArea } from 'semantic-ui-react';

const options = [
  { key: '1', text: 'Liquid Asset', value: 'liquid' },
  { key: '2', text: 'Tangible Assets', value: 'tang' },
  { key: '3', text: 'Intangible Asset', value: 'intang' },
  { key: '4', text: 'Long-Term Assets', value: 'lt asset' },
  { key: '5', text: 'Short-Term Liability', value: 'st liab' },
  { key: '6', text: 'Long-Term Liability', value: 'lt liab' },
  { key: '8', text: 'Earnings', value: 'earnings' },
  { key: '9', text: 'Spending', value: 'spending' },
]

const NewAccountForm = (props) => {
  return(
    <Segment>
      <h1>New Account</h1>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input
            required
            fluid
            id='form-subcomponent-shorthand-input-first-name'
            label='Account name'
            placeholder='Account name'
          />
          <Form.Field
          required
            control={Select}
            label='What kind of account is it?'
            options={options}
            placeholder='Subcategory'
          />
        </Form.Group>
        <Form.Field
          name='description'
          control={TextArea}
          label='Description'
          placeholder='Made a grocery trip to Rite Aid, split 50/25/25 between household supplies, food, and medicine'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  )
}

export default NewAccountForm
