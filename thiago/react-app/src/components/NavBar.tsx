import { Link } from "react-router"

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          GameStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Explore
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/best-sellers"}>
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/top-rated"}>
                    Top Rated
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/free-to-play"}>
                    Free to Play
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/multiplayer"}>
                    Multiplayer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/early-access"}>
                    Early Access
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Platform
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/ps4"}>
                    PS4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/ps5"}>
                    PS5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/switch"}>
                    Switch
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/windows"}>
                    Windows
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/macos"}>
                    MacOS
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/special-offers"}>
                Special Offers
              </Link>
            </li>
            <li className="nav-item">
              <div className="d-flex align-items-center">
                <Link className="nav-link" to={"/profile"}>
                  <i className="bi bi-person-circle me-2"></i>
                  Profile
                </Link>
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
