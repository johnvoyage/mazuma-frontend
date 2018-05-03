import React from "react";
// import { Header, Button, Popup, Grid } from 'semantic-ui-react';
// import { connect } from 'react-redux';
import { Segment, Form, Dropdown } from "semantic-ui-react";

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" }
];

const TransactionsFilter = props => {
  return (
    <Segment>
      <Form>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input
            label="Transaction # ≥ ..."
            type="number"
            min="1"
            step="1"
            width={4}
          />
          <Form.Input
            label="and ≤ ..."
            type="number"
            min="1"
            step="1"
            width={4}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input
            label="$ Amount  ≥ ... (enter as positive)"
            type="number"
            min="0.01"
            step="0.01"
            width={4}
          />
          <Form.Input
            label="and ≤ ..."
            type="number"
            min="0.01"
            step="0.01"
            width={4}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input label="Dated between..." type="date" width={4} />
          <Form.Input label="and..." type="date" width={4} />
          <Form.Input type="hidden" width={4} />
        </Form.Group>

        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Dropdown
            placeholder="Skills"
            fluid
            multiple
            selection
            options={options}
          />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
        <Form.Group>
          <Form.Input type="hidden" width={4} />
          <Form.Input label="Description includes..." width={8} />
          <Form.Input type="hidden" width={4} />
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default TransactionsFilter;
