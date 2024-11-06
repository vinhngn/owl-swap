import React from "react";
import Header from "../components/Header";
const Home = () => {
  return (
    <body className="d-flex flex-column min-vh-100">
      <div className="container">
        <Header loggedIn="true" />
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
        <br />
        <br />
        <p>Expected structure</p>
        <p>Main Body</p>
        <p>---header</p>
        <p>---Body</p>
        <p>------Search bar (future implimentation/ low priority)</p>
        <p>------rows div</p>
        <p>---------left row div (contains filters (future update))</p>
        <p>---------right row div (contains elements)</p>
        <p>
          ------------elements (div) (Upon clicking this elements we should be
          redirected to elements page)
        </p>
        <p>---------------div</p>
        <p>------------------image</p>
        <p>---------------seller's username</p>
        <p>---------------product's mini description</p>
        <p>
          ---------------chat icon (clicking this should redirect us to the
          chats feature)
        </p>
        <p>---------------price</p>
        <p>---------------like button (maybe)</p>
        <p>---footer</p>
      </div>
    </body>
  );
};

export default Home;
