import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const logout = () => {};
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Expense Keeper</div>
      <div className="user__btns">
        {localStorage.getItem("user") ? (
          <div>
            <span>Hi, {localStorage.getUser("user")[name]}</span>
            <Link to="/" onClick={logout}>
              Sign out
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn">
              Sign in
            </Link>
            <Link to="/signup" className="btn">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
