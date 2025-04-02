import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="link">
          <span className="logo">BookingApp-clone</span>
        </Link>

        {user ? (
          <span className="navItems">
            <span className="navUsername">{user.username}</span>
            <button className="navButton" onClick={handleLogout}>Logout</button>
          </span>
        ) : (
          <div className="navItems">
            <a href="https://booking-app-admin-chi.vercel.app/login" className="link">
              <button className="navButton">Register</button>
            </a>
            <Link to="/login" className="link">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div >
  );
};

export default Navbar;
