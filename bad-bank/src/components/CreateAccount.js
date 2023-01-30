import React, { useEffect } from "react";
import { useBankContext } from "../utils/BankContext";

function CreateAccount() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const { bankUser, setBankUser } = useBankContext();
  

  useEffect(() => {
    setBankUser([
      ...bankUser,
      { name: "Tobi", email: "t@dog.co", balance: 100 }
    ])
  }, [])
  


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
      <h2>Your are at Create Account</h2>
      {/* <p>context: {userBase[0].name}</p> */}
    </div>
  );
}

export default CreateAccount;
