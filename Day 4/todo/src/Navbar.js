const Navbar = ({title, name, link}) => {
  return ( 
      <nav className = "navbar">
          <h1> {title} </h1>
          <div className = "links">
              <a href = "/"> Home </a>
              <a href = {link} 
                target="_blank"
                rel="noreferrer"
                style = {{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
              }}> {name} </a>
          </div>
      </nav>
  );
}

//background-color does not work in JSX as - is the minus sign so Camel case is used.
//{} = Dynamic Value
export default Navbar;