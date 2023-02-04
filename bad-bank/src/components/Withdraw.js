import React from "react";
import { useState } from "react";
import { useBankContext } from "../utils/UserContext";
import Card from "../utils/CardContext";

function Withdraw() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const { bankUser, setBankUser } = useBankContext();
  console.log(bankUser);

  const [Withdraw, setWithdraw] = useState(0);


  function handleWithdraw(e) {
    console.log(bankUser);
    if (typeof Withdraw === "string") {
      let depositInt = parseInt(Withdraw);
      setBankUser(
        
        { name: "Paz", email: "paz@dog.co", password: "password", balance: bankUser[0].balance + depositInt },
        { name: "IDa", email: "ida@dog.co", password: "password", balance: 200 }

      )
      console.log(bankUser);

      // setBalance(bankUser[0].balance + depositInt);
      // bankUser[0].balance = balance2;
    } else {
      setBankUser(
        
        { name: "Paz", email: "paz@dog.co", password: "password", balance: bankUser[0].balance + Withdraw },
        { name: "IDa", email: "ida@dog.co", password: "password", balance: 200 }

      )
      console.log(bankUser);
    }
  }
  

  return (
    <Card
      txtcolor="black"
      header="Withdraw"
      title={"Balance: $" + bankUser[0].balance}
      body={
        <>
          <br />

          <form>
            <div className="form-group">
              <label htmlFor="Withdraw">Withdraw Amount:</label>
              <br />
              <br />
              <input
                type="number"
                className="form-control"
                id="Withdraw"
                min="-99999999"
                max="0"
                value={Withdraw}
                onChange={(e) => setWithdraw(e.currentTarget.value)}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </form>
        </>
      }
    />
  );
}

export default Withdraw;
