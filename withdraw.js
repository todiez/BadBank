function Withdraw() {
      //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const ctx = React.useContext(UserContext);

  return (
    <h1>
      Withdraw
      <br />
      {JSON.stringify(ctx)}
    </h1>
  );
}
