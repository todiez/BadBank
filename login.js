function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const ctx = React.useContext(UserContext);
  console.log(ctx);
  // console.log(ctx.users[0].name);

  function handleLogin() {
    console.log(email);
    for (let i = 0; i < ctx.users.lenght; i++) {
      if (ctx.users[i].email === email) {
        setLogin(true);
        return;
      } else {
        console.log("user does not exist");
      }
    }
  }

  return (
    <Card
      txtcolor="black"
      header="Login Page"
      status={status}
      body={
        !login ? (
          <>
            E-Mail Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>Login Success</h5>
          </>
        )
      }
    />
  );
}
