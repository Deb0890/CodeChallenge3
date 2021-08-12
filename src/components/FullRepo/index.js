import React from "react";
import "./style.css";

const Repo = (props) => {
  return (
    <article id="repoDetails">
      <h2>{props.data.name}</h2>
      <div className="divider"></div>
      <h3>
        Stars: <span className="dataPoint">{props.data.stars}</span>
      </h3>
      <h3>
        Forks: <span className="dataPoint">{props.data.forks}</span>
      </h3>
      <h3>
        Issues: <span className="dataPoint">{props.data.openIssues}</span>
      </h3>
    </article>
  );
};

export default Repo;
