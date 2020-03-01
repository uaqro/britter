import React from "react";
import { RecommendationBoxStyles } from "./RecommendationStyles";
import MY_SERVICE from "../../../services/index";

const RecommendationBox = ({ element }) => {
  return (
    <RecommendationBoxStyles>
      <p>{element.name}</p>
      <p>{element.goal}</p>
      <p>{element.daysToGoal}</p>
    </RecommendationBoxStyles>
  );
};

export default RecommendationBox;
