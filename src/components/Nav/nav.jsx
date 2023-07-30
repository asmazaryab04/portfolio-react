const Nav = ( ) => {
    return (
<>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Asma Zaryab</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <img src="C:\Users\WW\Desktop\portfolio-react\portfolio-react\src\assets\asma.jpeg" style={{width: '100%'}} />
            <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black"></a>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About Me"> About Me</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/My Experience"> Experience</a>
        </li>

        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Contact Me"> Contacts</a>
          </li>
        </ul>
    </div>
  </div>
</nav>
</>
    );
}

export default Nav
