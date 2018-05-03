// import faker from 'faker'
// import _ from 'lodash'
import React from "react";
import { Accordion } from "semantic-ui-react";
import panels from "./TitleAndContent";

// const panels = _.times(3, () => ({
//   title: 'this is a title',
//   content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// }))

// console.log(panels)

const FAQ = () => (
  <Accordion defaultActiveIndex={[0]} panels={panels} exclusive={false} fluid />
);

export default FAQ;
