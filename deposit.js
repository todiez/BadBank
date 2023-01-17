function Deposit() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const ctx = React.useContext(UserContext);

  const [deposit, setDeposit] = React.useState(0);
  const [balance, setBalance] = React.useState(ctx.users[0].balance)

  function handleDeposit(e) {
    console.log("inside handleDeposit: " + deposit);
    console.log(typeof(deposit))

    if (typeof(deposit) === 'string') {
      console.log("deposit is a string")
      let depositInt = parseInt(deposit);
      setBalance(balance + depositInt);
    } else {
      setBalance(balance + deposit);
    }
  }

  return (
    <Card
      txtcolor="black"
      header="Deposit"
      title={ctx.users[0].login ? <>{ctx.users[0].name}</> : <>Please Log in</>}
      body={
        !ctx.users[0].login ? (
          <>
            Balance: {balance} USD
            <br />
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="deposit">Deposit Amount:</label>
                <input
                  type="number"
                  className="form-control"
                  id="deposit"
                  min="0"
                  max="99999999"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}                 
                />
              </div>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposit}
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