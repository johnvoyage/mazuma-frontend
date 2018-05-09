import React from "react";
import { Table, Icon } from "semantic-ui-react";

const timePeriod = [
  { key: "day(s)", text: "day(s)", value: "day(s)" },
  { key: "week(s)", text: "week(s)", value: "week(s)" },
  { key: "month(s)", text: "month(s)", value: "month(s)" },
  { key: "year(s)", text: "year(s)", value: "year(s)" }
];

const editCell = (
  <Table.Cell
    onClick={() => console.log("edit goal!")}
    selectable
    textAlign="center"
  >
    {" "}
    <Icon name="pencil" />
  </Table.Cell>
);

const deleteCell = (
  <Table.Cell
    onClick={() => console.log("delete goal!")}
    selectable
    textAlign="center"
  >
    <Icon name="remove" />
  </Table.Cell>
);

const options = [
  {
    key: "netWorth",
    prefix: "Increase net worth by ",
    label: "%",
    labelPosition: "right",
    min: "0.1",
    step: "0.1",
    defaultValue: "3",
    defaultTime: "100"
  },
  {
    key: "assets",
    prefix: "Increase assets by ",
    label: "%",
    labelPosition: "right",
    min: "0.1",
    step: "0.1",
    defaultValue: "5",
    defaultTime: "100"
  },
  {
    key: "liabilities",
    prefix: "Increase liabilities by ",
    label: "%",
    labelPosition: "right",
    min: "0.1",
    step: "0.1",
    defaultValue: "2.5",
    defaultTime: "100"
  },
  {
    key: "netIncome",
    prefix: "Keep net income above ",
    label: "$",
    labelPosition: "left",
    min: "1",
    step: "1",
    defaultValue: "50",
    defaultTime: "1"
  },
  {
    key: "income",
    prefix: "Keep income above ",
    label: "$",
    labelPosition: "left",
    min: "1",
    step: "1",
    defaultValue: "100",
    defaultTime: "1"
  },
  {
    key: "spending",
    prefix: "Keep spending below ",
    label: "$",
    labelPosition: "left",
    min: "1",
    step: "1",
    defaultValue: "35",
    defaultTime: "1"
  }
];

export default {
  timePeriod,
  editCell,
  deleteCell,
  options
};
