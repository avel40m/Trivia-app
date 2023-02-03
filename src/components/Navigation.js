import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../style/navigation.css";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("usuario");
    setCurrentUser(null);
    navigate('/login');
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_238906.png"
          alt="trivia"
          width={30}
          height={30}
        />
      </div>
      <ul className="navbar-link">
        {currentUser === null ? (
          <li>
            <Link to="/">Home</Link>
          </li>
        ) : (
          <li>
            <Link to="/jugar">Jugar</Link>
          </li>
        )}
      </ul>
      <ul className="navbar-link">
        {currentUser === null ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li>
            <button className="button-logout" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
