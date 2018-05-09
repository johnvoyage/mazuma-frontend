import React from "react";
import { Segment, Input, Select, Button } from "semantic-ui-react";

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
