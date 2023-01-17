function Withdraw() {
      //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const ctx = React.useContext(UserContext);

  const [deposit, setDeposit] = React.useState(0);
  const [balance, setBalance] = React.useState(ctx.users[0].balance)

  function handleWithdraw(e) {
   
    if (typeof(deposit) === 'string') {
      let depositInt = parseInt(deposit);
      setBalance(balance + depositInt);
      console.log(balance)   
      ctx.users[0].balance = balance;   
      console.log(balance)   
    } else {
      setBalance(balance + deposit);
      ctx.users[0].balance = balance;
    }
  }

  return (

    
    <Card
      txtcolor="black"
      header="Withdraw"
      title={ctx.users[0].login ? <>{ctx.users[0].name}</> : <>Please Log in</>}
      body={
        ctx.users[0].login ? (
          <>
            Balance: {balance} USD
            <br />
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="deposit">Withdraw Amount:</label>
                <input
                  type="number"
                  className="form-control"
                  id="deposit"
                  min="-9999999"
                  max="0"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}                 
                />
              </div>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleWithdraw}
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
