import React from "react";
import ResearchCard from "../Components/ResearchCard";
import ResearchConfig from "../Components/Config/ResearchConfig";
import "../css/Research.css";

const Research = () => {
  return (
    <div className="research-home">
      {ResearchConfig.map((e, i) => (
        <div className="research-card-wrapper" key={i}>
          <ResearchCard {...e} />
        </div>
      ))}
    </div>
  );
};

export default Research;
