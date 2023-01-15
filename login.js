function Login() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const ctx = React.useContext(UserContext);

  console.log(ctx.users[0]);

  function handleLogin() {
    console.log(email);
    
      if (ctx.users[0].email === email) {
        setLogin(true);
        
      } else {
        console.log("user does not exist");
      }
    
  }

  return (
    <Card
      txtcolor="black"
      header="Login Page"
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
