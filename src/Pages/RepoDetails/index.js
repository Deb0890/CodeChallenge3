import React from "react";
import { FullRepo as Repo } from "../../components";
import "./style.css";

const data = {
  repoName: "repo name",
  stars: 3,
  forks: 10,
  issues: 15,
  commits: 20,
};

// TODO get the data from the store and update the dom.
// TODO add loading data before the real data is loaded

const RepoDetails = ({ repoId }) => {
  const getRepoId = () => {
    let url = window.location.pathname;
    url = url.split("/")[2];
    return url;
  };
  return <Repo props={data} />;
};

export default RepoDetails;
