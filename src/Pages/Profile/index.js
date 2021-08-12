import React, { useEffect } from "react";
import Repo from "../../components/Repo";
import { useDispatch } from "react-redux";

import { getRepos } from "../../actions";


//! Hard coded.
const names = ["One", "two", "three"];

// TODO Get the users data from the store and use that to dynamically render the data.

const Profile = () => {
  useEffect(() => {
    const githubID = localStorage.getItem("username");
    search(githubID);
  }, [])
  const dispatch = useDispatch();
  
  const search = (username) => {
    dispatch(getRepos(username));
    
  }

  return (
    <>
      <h2 className="heading">{"temp"}'s Repos</h2>
      <section id="repoCollection">
        {names.map((name, i) => (
          <Repo key={i} repoName={name} repoId="placeholder" />
        ))}
      </section>
    </>
  );
};

export default Profile;
