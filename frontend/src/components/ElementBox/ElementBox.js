import React, { useState, useEffect } from "react";
import { ElementBoxStyles } from "./ElementBoxStyles";

const ElementBox = ({ element }) => {
  return (
    <ElementBoxStyles>
      <p>{element.name}</p>
      <p>{element.name}</p>
      <p>{element.name}</p>
    </ElementBoxStyles>
  );
};

export default ElementBox;
