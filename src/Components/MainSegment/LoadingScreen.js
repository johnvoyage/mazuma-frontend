import React from "react";
import { Image } from "semantic-ui-react";

const LoadingScreen = () => {
  return (
    <Image src={require("../../Assets/images/loader.gif")} circular centered />
  );
};

export default LoadingScreen;
