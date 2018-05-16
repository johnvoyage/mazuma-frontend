import React from "react";
import { Form, Input, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import dateHelpers from "../../HelperFunctions/dateHelpers";

const TimingFilter = props => {
  const handleChange = event => {
    props.updateAsOfDate("netWorthContainer", "asOfDate", event.target.value);
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field width={6} />
        <Form.Field width={4} inline>
          <label>As of...</label>
          <Input
            onChange={handleChange}
            name="asOfDate"
            value={props.asOfDate}
            type="date"
          />
        </Form.Field>
        <Form.Field width={6} />
      </Form.Group>
      <Header as="h5" textAlign="center">
        Note: hit 'x' to reset to today: ({dateHelpers.dateHelpersEnglish(
          new Date()
        )})
      </Header>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    asOfDate: state.netWorthContainer.asOfDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAsOfDate: (container, whichDate, newDate) => {
      dispatch({ type: "UPDATE_DATE", container, whichDate, newDate });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimingFilter);
