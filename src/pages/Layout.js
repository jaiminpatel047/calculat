import { Outlet, Link } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg position-relative" mode={props.mode} id="headerNav">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarCenteredExample"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li>
                <Link to="/">Step One</Link>
              </li>
              <li>
                <Link to="/Pagetwo">Step Two</Link>
              </li>
              <li>
                <Link to="/Pagethree">Step Three</Link>
              </li>
              <li>
                <Link to="/Pagefour">Step Four</Link>
              </li>
              <li>
                <Link to="/Pagefive">Step Five</Link>
              </li>
              <li>
                <Link to="/Pagesix">Step Six</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="darkMode form-check form-switch position-absolute p-2 m-3 top-0 end-0">
               <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
