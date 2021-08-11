import React from "react";
import Repo from "../../components/Repo";

//! Hard coded.
const names = ["One", "two", "three"];

// TODO Get the users data from the store and use that to dynamically render the data.

const Profile = ({ userName }) => {
  return (
    <>
      <h2 className="heading">{userName}'s Repos</h2>
      <section id="repoCollection">
        {names.map((name, i) => (
          <Repo key={i} repoName={name} repoId="placeholder" />
        ))}
      </section>
    </>
  );
};

export default Profile;
