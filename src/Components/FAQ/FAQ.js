import React from "react";
import { Accordion } from "semantic-ui-react";
import panels from "./TitleAndContent";

const FAQ = () => (
  <Accordion defaultActiveIndex={[0]} panels={panels} exclusive={false} fluid />
);

export default FAQ;
