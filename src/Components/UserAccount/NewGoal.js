// import faker from 'faker'
// import _ from 'lodash'
import React from "react";
import { Segment, Input, Select, Button } from "semantic-ui-react";

// const panels = _.times(3, () => ({
//   title: 'this is a title',
//   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// }))

// console.log(panels)

const firstOptions = [
  { key: "increase", text: "Increase", value: "increase" },
  { key: "decrease", text: "Decrease", value: "decrease" }
];

const increaseOptions = [
  { key: "net worth", text: "net worth", value: "net worth" },
  { key: "earnings", text: "earnings", value: "earnings" },
  { key: "assets", text: "assets", value: "assets" }
];

// const decreaseOptions = [
//   { key: "liabilities", text: "liabilities", value: "liabilities" },
//   { key: "spending", text: "spending", value: "spending" }
// ];

const percentOrAmount = [
  { key: "%", text: "%", value: "%" },
  { key: "$", text: "$", value: "$" }
];

const timeframe = [
  { key: "week", text: "week", value: "week" },
  { key: "two weeks", text: "two weeks", value: "two weeks" },
  { key: "month", text: "month", value: "month" },
  { key: "three months", text: "three months", value: "three months" },
  { key: "six months", text: "six months", value: "six months" },
  { key: "year", text: "year", value: "year" }
];

const NewGoal = () => {
  const handleClick = event => {
    const firstDropdown = event.target.parentElement.children[0].innerText;
    const secondDropdown = event.target.parentElement.children[1].innerText;
    const numberInput = parseFloat(
      event.target.parentElement.children[3].children[0].value
    );
    const dollar =
      event.target.parentElement.children[4].children[0].innerText === "$"
        ? "$"
        : "";
    const percent =
      event.target.parentElement.children[4].children[0].innerText === "%"
        ? "%"
        : "";
    const timePeriod =
      event.target.parentElement.children[6].children[0].innerText;
    console.log(
      `${firstDropdown} ${secondDropdown} by ${dollar}${numberInput}${percent} every ${timePeriod}`
    );
    // debugger;
  };
  return (
    <Segment>
      <h3>New Goal:</h3>
      <Input fluid>
        <Select compact options={firstOptions} defaultValue="increase" />

        <Select compact options={increaseOptions} defaultValue="net worth" />
        <Input label="by" type="hidden" />
        <Input type="number" min="0.01" step="0.01" defaultValue="5" />

        <Select compact options={percentOrAmount} defaultValue="%" />
        <Input label="every" type="hidden" />
        <Select compact options={timeframe} defaultValue="six months" />

        <Button onClick={handleClick} type="submit">
          Add Goal
        </Button>
      </Input>
    </Segment>
  );
};

export default NewGoal;
