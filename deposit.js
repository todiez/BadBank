function Deposit() {
    //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const ctx = React.useContext(UserContext);

  const [deposit, setDeposit] = React.useState(0);


  function handleDeposit(deposit) {
    console.log("inside handleDeposit: " + deposit);
    
    
      ctx.users[0].balance += deposit;
      console.log(ctx.users[0].balance);
    
  }

  return (
    <Card
      txtcolor="black"
      header="Deposit"
      title={
        ctx.users[0].login ? (
          <>            
            {ctx.users[0].name}
          </>
        ) : (
          <>Please Log in</>
        )
      }
      body={
        ctx.users[0].login ? (
          <> 
          Balance: {ctx.users[0].balance} USD
          <br />
            Deposit Amount
            <hr />
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Deposit Amount"
              value={deposit} 
              onChange={(e) => setDeposit(e.currentTarget.value)}
              
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleDeposit(deposit)}            >
              Deposit
            </button>
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
