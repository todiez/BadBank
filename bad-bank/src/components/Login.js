import React from "react";
import { useBankContext } from "../utils/BankContext";

function Login() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const userBase = useBankContext();
  console.log(userBase);

  return (
    //   <Card
    //     txtcolor="black"
    //     header="BadBank Landing"
    //     title="Welcome to the Bank"
    //     text="You can use this for nothing"
    //     body={<img src="bank.png" className="img-fluid" alt="Image" />}
    //   />
    <div>
      <h1>Welcome to BAD BANK</h1>
      <h2>Your are at Login</h2>
      {/* <p>context: {userBase[0].name}</p> */}
    </div>
  );
}

export default Login;
