import React from "react";

import "./style.css";

const Repo = ({ repoName, repoId }) => {
  const handleClick = (e) => {
    localStorage.setItem("repoId", e.target.closest("section").id);
    window.location.pathname = "/repo-details";
  };

  return (
    <section className="repoContainer" id={repoId}>
      <article className="repo">
        <h2>{repoName}</h2>
      </article>
      <button onClick={handleClick}>more info</button>
    </section>
  );
};

export default Repo;
