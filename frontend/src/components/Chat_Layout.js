const Chat_layout = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="styles.css" />
      <h1>Chat App</h1>
      <div className="container text-center">
        <form className="row" id="message-form">
          <div className="col-6">
            <input
              id="user-message"
              type="text"
              placeholder="Enter Message here"
              className="form-control"
              required
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-primary"
              value="Send Message!"
            />
          </div>
        </form>
        <div className="col-12">
          <ul id="messages"></ul>
        </div>
      </div>
      <script src="/socket.io/socket.io.min.js"></script>
      <script src="../services/chatScript.js"></script>
    </>
  );
};

export default Chat_layout;
/*
Chats ------------     Image
-----------border-----------
Image------Name----{ChatOpt}
Image------Name----{ChatOpt}
Image------Name----{ChatOpt}
Image------Name----{ChatOpt}
Image------Name----{ChatOpt}
*/
