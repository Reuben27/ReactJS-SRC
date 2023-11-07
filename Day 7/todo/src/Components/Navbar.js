const Navbar = () => {
  return ( 
    <nav className = "navbar">
      <a href = "/"> <h1> ToDo </h1> </a>
      <div className = "links">
        <a href = "/add-task" 
          // target="_blank"
          // rel="noreferrer"
          style = {{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
        }}> Add Tasks </a>
      </div>
    </nav>
  );
}

//background-color does not work in JSX as - is the minus sign so Camel case is used.
//{} = Dynamic Value
export default Navbar;