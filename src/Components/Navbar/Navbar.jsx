import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1 className="heading">Images of Md. Imran Hossain</h1>
      <div className="navbar_div">
        <div className="navlist">
          <NavLink to="/" className="album">
            All Images
          </NavLink>
          <NavLink to="/first" className="album">
            2009-2014
          </NavLink>
          <NavLink to="/second" className="album">
            2015-2020
          </NavLink>
          <NavLink to="/third" className="album">
            2021-2024
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
