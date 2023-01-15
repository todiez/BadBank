function Home() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="black"
      header="BadBank Landing"
      title="Welcome to the Bank"
      text="You can use this for nothing"
      body={<img src="bank.png" className="img-fluid" alt="Image" />}
    />
  );
}
