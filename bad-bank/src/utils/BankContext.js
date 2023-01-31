import React, { useState, useContext } from "react";

//initializing context
export const BankContext = React.createContext();

//this is actually using context, making it available
export const useBankContext = () => useContext(BankContext);

//one element in which all others can be rendered out within
//keyword children needs to be children and nothing else
export default function BankProvider({ children }) {
  const [bankUser, setBankUser] = useState([
    { name: "Paz", email: "paz@dog.co", balance: 500 },
    { name: "IDa", email: "ida@dog.co", balance: 200 }
  ]);
  //could also be the clients of an application of the database

  return (
    <BankContext.Provider value={{ bankUser, setBankUser }}>
      {/* with setBankuser the the context of bankUser (e.g.name) can be changed */}
      {children}
    </BankContext.Provider>
  );
}
