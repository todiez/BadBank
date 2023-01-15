const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

//card component as shared context
function Card(props) {
  function classes() {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? "text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
  
    <div className={classes()} style={{ maxWidth: "18rem", margin: "50px"}}>
      <h5 className="card-header" style={{background: "#AED6F1" }}>{props.header}</h5>
      <div className="card-body" style={{background: "#EBF5FB" }}>
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {<hr/>}
        {<br /> }
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
