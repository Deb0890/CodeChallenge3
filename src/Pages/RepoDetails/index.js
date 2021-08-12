import React, { useEffect } from "react";

import { FullRepo as Repo } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../actions";
import "./style.css";

const data = {
  repoName: "repo name",
  stars: 3,
  forks: 10,
  issues: 15,
  commits: 20,
};

const RepoDetails = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.data);

  useEffect(() => {
    const githubID = localStorage.getItem("username");
    search(githubID);
  }, []);

  const search = (username) => {
    dispatch(getRepos(username));
  };

  function getRepoById(id) {
    const result = userData.filter((elm) => elm.id === parseInt(id));
    if (!result[0]) {
      return {
        name: "loading",
        forks: "loading",
        openIssues: "loading",
        stars: "loading",
      };
    }
    let name = result[0].name;

    const output = {
      name: result[0].name,
      forks: result[0].forks,
      openIssues: result[0].open_issues,
      stars: result[0].stargazers_count,
    };
    return output;
  }

  getRepoById(localStorage.getItem("repoId"));

  return <Repo data={getRepoById(localStorage.getItem("repoId"))} />;
};

export default RepoDetails;
