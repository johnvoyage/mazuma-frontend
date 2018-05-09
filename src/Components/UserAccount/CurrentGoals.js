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
    console.log(goalKey);
    props.goalSliderToggle(goalKey);
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
              label={goal.label}
              labelPosition={goal.labelPosition}
              type="number"
              min={goal.min}
              step={goal.step}
              defaultValue={goal.defaultValue}
            />
            {"   "}
            every
            {"   "}
            <Input
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
              defaultValue={goal.defaultTime}
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGoals);

// <Table.Row>
//   <Table.Cell collapsing>
//     <Checkbox slider />
//   </Table.Cell>
//   <Table.Cell>
//     Increase net worth by{"   "}
//     <Input
//       label="%"
//       labelPosition="right"
//       type="number"
//       min="0.01"
//       step="0.01"
//       defaultValue="5"
//     />
//     {"   "}
//     every
//     {"   "}
//     <Input
//       label={
//         <Dropdown
//           defaultValue="day(s)"
//           options={goalOptions.timePeriod}
//         />
//       }
//       labelPosition="right"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="100"
//     />
//   </Table.Cell>
//   {goalOptions.editCell}
//   {goalOptions.deleteCell}
// </Table.Row>
// <Table.Row>
//   <Table.Cell collapsing>
//     <Checkbox slider />
//   </Table.Cell>
//   <Table.Cell>
//     Increase assets by{"   "}
//     <Input
//       label="%"
//       labelPosition="right"
//       type="number"
//       min="0.01"
//       step="0.01"
//       defaultValue="6"
//     />
//     {"   "}
//     every
//     {"   "}
//     <Input
//       label={
//         <Dropdown
//           defaultValue="day(s)"
//           options={goalOptions.timePeriod}
//         />
//       }
//       labelPosition="right"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="100"
//     />
//   </Table.Cell>
//   {goalOptions.editCell}
//   {goalOptions.deleteCell}
// </Table.Row>
// <Table.Row>
//   <Table.Cell collapsing>
//     <Checkbox slider />
//   </Table.Cell>
//   <Table.Cell>
//     Increase liabilities by{"   "}
//     <Input
//       label="%"
//       labelPosition="right"
//       type="number"
//       min="0.01"
//       step="0.01"
//       defaultValue="2.5"
//     />
//     {"   "}
//     every
//     {"   "}
//     <Input
//       label={
//         <Dropdown
//           defaultValue="day(s)"
//           options={goalOptions.timePeriod}
//         />
//       }
//       labelPosition="right"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="100"
//     />
//   </Table.Cell>
//   {goalOptions.editCell}
//   {goalOptions.deleteCell}
// </Table.Row>
// <Table.Row>
//   <Table.Cell collapsing>
//     <Checkbox slider />
//   </Table.Cell>
//   <Table.Cell>
//     Keep net income above{"   "}
//     <Input
//       label="$"
//       labelPosition="left"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="50"
//     />
//     {"   "}
//     every
//     {"   "}
//     <Input
//       label={
//         <Dropdown
//           defaultValue="day(s)"
//           options={goalOptions.timePeriod}
//         />
//       }
//       labelPosition="right"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="1"
//     />
//   </Table.Cell>
//   {goalOptions.editCell}
//   {goalOptions.deleteCell}
// </Table.Row>
// <Table.Row>
//   <Table.Cell collapsing>
//     <Checkbox slider />
//   </Table.Cell>
//   <Table.Cell>
//     Keep income above{"   "}
//     <Input
//       label="$"
//       labelPosition="left"
//       type="number"
//       step="1"
//       defaultValue="100"
//     />
//     {"   "}
//     every
//     {"   "}
//     <Input
//       label={
//         <Dropdown
//           defaultValue="day(s)"
//           options={goalOptions.timePeriod}
//         />
//       }
//       labelPosition="right"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="1"
//     />
//   </Table.Cell>
//   {goalOptions.editCell}
//   {goalOptions.deleteCell}
// </Table.Row>
// <Table.Row>
//   <Table.Cell collapsing>
//     <Checkbox slider />
//   </Table.Cell>
//   <Table.Cell>
//     Keep spending below{"   "}
//     <Input
//       label="$"
//       labelPosition="left"
//       type="number"
//       step="1"
//       defaultValue="35"
//     />
//     {"   "}
//     every
//     {"   "}
//     <Input
//       label={
//         <Dropdown
//           defaultValue="day(s)"
//           options={goalOptions.timePeriod}
//         />
//       }
//       labelPosition="right"
//       type="number"
//       min="1"
//       step="1"
//       defaultValue="1"
//     />
//   </Table.Cell>
//   {goalOptions.editCell}
//   {goalOptions.deleteCell}
// </Table.Row>
