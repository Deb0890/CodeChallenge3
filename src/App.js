import React from "react";
import { Repo, Header } from "./components";
import { Homepage, Profile, RepoDetails } from "./Pages";
import { Switch, Route } from "react-router-dom";
import "./style.css";

// const data = {
//   repoName: "Test",
//   issues: "1",
//   forks: "3",
//   stars: "1",
//   commits: "1",
// };
// <Repo props={data} />

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/profile">
          <Profile userName="danjcooper" />
        </Route>
        <Route exact path="/repo-details">
          <RepoDetails repoId="1" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
