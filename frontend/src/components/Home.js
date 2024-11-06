import React from "react";
import Element_Layout from "./Element_Layout";
/*Add some logic here for the frames*/
let elements = []; /*Used to generate the frames inside*/

for (let i = 0; i < 2; i++) {
  elements.push(<Element_Layout />);
}

const Home_Layout = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
        {elements}
      </div>
    </>
  );
};

export default Home_Layout;

/*
Default
  Header
    Name
    Logo
    Signin
      Email
      password
  Script
  Footer

Home
  Header
    Name
    Logo
    Settings
    ChatButton
  Body
    LayOut
      Components
        Frame
          Photo
          Name
          Price
          Like
          Chat
  Footer
*/
