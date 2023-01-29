import {
  
  Link
} from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "#EBF5FB" }}
    >
      {/* <a className="navbar-brand" href="/">
        BadBank123
      </a> */}
      <Link to="/">   Bad Bank</Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
        <Link to="/CreateAccount">Create Account</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Deposit">Deposit</Link>
        <Link to="/Withdraw">Whithdraw</Link>
        <Link to="/Balance">Balance</Link>
        <Link to="/Alldata">All Data</Link>
          {/* <a className="nav-link" href="#/CreateAccount/">
            CreateAccount
          </a>
          <a className="nav-link" href="#/login/">
            Login
          </a>
          <a className="nav-link" href="#/deposit/">
            Deposit
          </a>
          <a className="nav-link" href="#/withdraw/">
            Withdraw
          </a>
          <a className="nav-link" href="#/balance/">
            Balance
          </a>
          <a className="nav-link" href="#/alldata/">
            AllData
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
