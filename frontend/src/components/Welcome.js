import Header from "./Header";
const Welcome = () => {
  return (
    <body className="d-flex flex-column min-vh-100">
      <div className="container">
        <Header loggedIn="false" />
      </div>
    </body>
  );
};
export default Welcome;
