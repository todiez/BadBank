// import React, { useEffect } from "react";
// import { useBankContext } from "../utils/UserContext";

// function CreateAccount() {
//   //access shared context with help of react native function useContext and reference
//   //to the created context with UserContext
//   const { bankUser, setBankUser } = useBankContext();

//   useEffect(() => {
//     setBankUser([
//       ...bankUser,
//       { name: "Tobi", email: "t@dog.co", balance: 100 }
//     ])
//   }, [])

//   return (
//     //   <Card
//     //     txtcolor="black"
//     //     header="BadBank Landing"
//     //     title="Welcome to the Bank"
//     //     text="You can use this for nothing"
//     //     body={<img src="bank.png" className="img-fluid" alt="Image" />}
//     //   />
//     <div>
//       <h1>Welcome to BAD BANK</h1>
//       <h2>Your are at Create Account</h2>
//       {/* <p>context: {userBase[0].name}</p> */}
//     </div>
//   );
// }

// export default CreateAccount;

import React from "react";
import { useState } from "react";
import { useBankContext } from "../utils/Context";
import Card from "../utils/CardContext";

function CreateAccount() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext

  const { bankUser, setBankUser } = useBankContext();

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 100);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    setBankUser([
      ...bankUser,
      { name: name, email: email, password: password, balance: 0 },
    ]);

    // ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      txtcolor="black"
      header="Create Account"
      title="Input necessary Data:"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
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
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another Account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
