import Header from "./Header";
const Welcome = () => {
  return (
    <body className="d-flex flex-column min-vh-100">
      <div className="container">
        <Header loggedIn="false" />
        <h1>Welcome to Owl Swap</h1>
        <br />
        <br />
        <h2>What is Owl Swap?</h2>
        <p>Owl swap is a service for TUJ students to trade used goods</p>
        <br />
        <br />
        <h2>How to use it?</h2>
        <p>Login using your temple mail (tumail)</p>
        <p>
          If its your first time you will be asked to enter your username. So
          type the name that you would like to have while you use this platform
        </p>
        <p>
          Once your are done with the intial set up, you can now access the
          service
        </p>
        <p>
          Upon loggin in you will be redirected to the home page where you will
          be able to see things that other users want to sell
        </p>
        <p>
          If you find anything intresting you could use the chat feature to
          reachout the seller and start negotiating the price and trade location
        </p>
        <br />
        <br />
        <h2>Why do we need OWL SWAP</h2>
        <p>Temple is a university with many international students</p>
        <p>
          Getting rid of used goods is a hustle at the same time finding a legit
          seller is equally challeging
        </p>
        <p>This is where Owl Swap steps in</p>
        <p>
          By making sure that we dont have any non temple user we can ensure
          that the seller is legit and its also benficial for people who wanna
          get rid of their goods
        </p>
        <br />
        <br />
        <h1>Happy swapping</h1>
      </div>
    </body>
  );
};
export default Welcome;
