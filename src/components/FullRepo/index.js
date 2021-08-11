import React from "react";
import "./style.css";

const Repo = ({ props }) => {
  return (
    <article id="repoDetails">
      <h2>{props.repoName}</h2>
      <div className="divider"></div>
      <h3>
        Stars: <span className="dataPoint">{props.stars}</span>
      </h3>
      <h3>
        Commits: <span className="dataPoint">{props.commits}</span>
      </h3>
      <h3>
        Forks: <span className="dataPoint">{props.forks}</span>
      </h3>
      <h3>
        Issues: <span className="dataPoint">{props.issues}</span>
      </h3>
    </article>
  );
};

export default Repo;
