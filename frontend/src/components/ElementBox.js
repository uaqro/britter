import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ElementBox = ({ element }) => {
  return (
    <Element>
      <p>{element.name}</p>
      <p>{element.name}</p>
      <p>{element.name}</p>
    </Element>
  );
};

export default ElementBox;
