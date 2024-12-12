import "./Header.css";

export const Header = () => {
  return (
    <header className="fixed-top mt-3">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">LOGO</a>

                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Prices</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Dropdown</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>

                    <form className="d-flex">                      
                      <button className="btn btn-primary rounded-pill px-3">Get Started</button>
                    </form>
                  </div>
                </div>
            </nav>
        </div>
    </header>
  )
}