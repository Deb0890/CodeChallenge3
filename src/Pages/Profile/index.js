import React, { useEffect } from "react";
import Repo from "../../components/Repo";
import { useDispatch, useSelector } from "react-redux";

import { getRepos } from "../../actions";

const Profile = () => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData.data);

  useEffect(() => {
    const githubID = localStorage.getItem("username");
    search(githubID);
  }, []);

  const search = (username) => {
    dispatch(getRepos(username));
  };

  const renderRepos = () => {
    return userData.map((elm, i) => (
      <Repo key={i} repoName={elm.name} repoId={elm.id} />
    ));
  };

  return (
    <>
      <h2 className="heading">{localStorage.getItem("username")}'s Repos</h2>
      <section id="repoCollection">
        {userData ? renderRepos() : <h1>No dogs mate</h1>}
      </section>
    </>
  );
};

export default Profile;
