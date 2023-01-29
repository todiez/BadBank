function Balance() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const ctx = React.useContext(UserContext);


  return (
    <Card
      txtcolor="black"
      header="Balance"
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
            {ctx.users[0].balance}
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
