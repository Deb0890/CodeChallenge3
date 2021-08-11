import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";

import { getRepos } from "../../actions";

const Homepage = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    console.log(username);

    console.log("Clicked");

    dispatch(getRepos(username));

    // TODO add the data to the store.

    // window.location.pathname = "/profile";
  };

  return (
    <>
      <h1 className="heading">Welcome</h1>
      <form onSubmit={handleClick}>
        <label>Github Username</label>
        <input id="username" type="text" placeholder="github username"></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default Homepage;
