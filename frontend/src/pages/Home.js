import React from "react";
import Header from "../components/Header";
import Chat_layout from "../components/Chat_Layout";
const Home = () => {
  return (
    <div className="container">
      <Header loggedIn="true" />
      <Chat_layout />
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
    </div>
  );
};

export default Home;
