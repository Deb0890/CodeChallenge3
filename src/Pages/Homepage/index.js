import React from "react";
import "./style.css";

const Homepage = () => {

  const handleClick = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    console.log(username);

    console.log("Clicked");
    localStorage.setItem('username', username);
    window.location.pathname = "/profile";
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
