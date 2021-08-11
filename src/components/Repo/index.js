import React from "react";

import "./style.css";

const Repo = (repoName, repoId) => {
  const handleClick = (e) => {
    console.log(e.target.closest("section").key);
    console.log(e);
    console.log("clicked");
    window.location.pathname = "/repo-details/1";
  };

  return (
    <section id={repoId.repoId}>
      <article className="repo">
        <h2>{repoName.repoName}</h2>
      </article>
      <button onClick={handleClick}>more info</button>
    </section>
  );
};

export default Repo;
