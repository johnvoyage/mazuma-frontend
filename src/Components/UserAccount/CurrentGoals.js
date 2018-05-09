import React from "react";
import {
  Segment,
  Table,
  Checkbox,
  Button,
  Input,
  Dropdown
} from "semantic-ui-react";
import goalOptions from "../../StaticOptions/goalOptions";
import { connect } from "react-redux";

const CurrentGoals = props => {
  const handleGoalSliderChange = goalKey => {
    props.goalSliderToggle(goalKey);
  };

  const handleInputChange = (goal, amountOrTime, value) => {
    props.changeGoal(goal, amountOrTime, value);
  };

  const renderRows = () => {
    return goalOptions.options.map((goal, index) => {
      return (
        <Table.Row key={goal.key}>
          <Table.Cell collapsing>
            <Checkbox
              onChange={() => handleGoalSliderChange(goal.key)}
              checked={props.goalContainer[goal.key].show}
              slider
            />
          </Table.Cell>
          <Table.Cell>
            {goal.prefix}
            <Input
              name="amount"
              value={props.goalContainer[goal.key].amount}
              onChange={event =>
                handleInputChange(
                  goal.key,
                  event.target.name,
                  event.target.value
                )
              }
              label={goal.label}
              labelPosition={goal.labelPosition}
              type="number"
              min={goal.min}
              step={goal.step}
            />
            {"   "}
            every
            {"   "}
            <Input
              value={props.goalContainer[goal.key].time}
              name="time"
              onChange={event =>
                handleInputChange(
                  goal.key,
                  event.target.name,
                  event.target.value
                )
              }
              label={
                <Dropdown
                  defaultValue="day(s)"
                  options={goalOptions.timePeriod}
                />
              }
              labelPosition="right"
              type="number"
              min="1"
              step="1"
            />
          </Table.Cell>
          {goalOptions.editCell}
          {goalOptions.deleteCell}
        </Table.Row>
      );
    });
  };

  return (
    <Segment>
      <h3>Current Goals:</h3>
      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" width={1}>
              Chart
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" width={13}>
              Goal
            </Table.HeaderCell>
            <Table.HeaderCell width={1} />
            <Table.HeaderCell width={1} />
          </Table.Row>
        </Table.Header>

        <Table.Body>{renderRows()}</Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Button
                onClick={() => props.allGoalSlidersToggle(true)}
                size="small"
              >
                Chart All
              </Button>
              <Button
                onClick={() => props.allGoalSlidersToggle(false)}
                size="small"
              >
                Chart None
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    goalContainer: state.goalContainer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goalSliderToggle: goal => {
      dispatch({ type: "GOAL_SLIDER_TOGGLE", goal });
    },
    allGoalSlidersToggle: truthy => {
      dispatch({ type: "ALL_GOALS_SLIDER_TOGGLE", truthy });
    },
    changeGoal: (goal, amountOrTime, value) => {
      dispatch({ type: "CHANGE_GOAL", goal, amountOrTime, value });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGoals);
