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
    navigate("/login");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <Link to="/" className="flex items-center">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_238906.png"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Quizz APP
          </span>
        </Link>
        {currentUser == null ? (
          <div className="flex items-center">
            <Link
              to="/"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              Home
            </Link>
            <Link
              to="/login"
              className="mr-6 text-sm font-medium text-blue-500 dark:text-blue hover:underline"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              to="/jugar"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              Jugar
            </Link>
            <button
              onClick={logout}
              to="/login"
              className="mr-6 text-sm font-medium text-red-500 dark:text-red hover:underline"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
