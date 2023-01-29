import "./App.css";
import NavBar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <UserContext.Provider
      value={{
        users: [
          {
            name: "Paz",
            email: "paz@diez.guru",
            password: "bestdog",
            login: false,
            balance: 100,
          }
        ]
      }}
    > */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/CreateAccount/" component={CreateAccount} />
      <Route path="/login/" component={Login} />
      <Route path="/deposit/" component={Deposit} />
      <Route path="/withdraw/" component={Withdraw} />
      <Route path="/balance/" component={Balance} />
      <Route path="/alldata/" component={AllData} />
    </UserContext.Provider> */}
      </Routes>
    </Router>
  );
}

export default App;
