import React from "react";
import Card from "../utils/CardContext";
import pic from "../pic/bank.png";

function Home() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext

  return (
    <div>
      <Card
        txtcolor="black"
        header="BadBank Landing"
        title="Welcome to the Bank"
        text="You can use this for nothing"
        body={<img src={pic} className="img-fluid" alt="Responsive" />}
      />
    </div>
  );
}

export default Home;
