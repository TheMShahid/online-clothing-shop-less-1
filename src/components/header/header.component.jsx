import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crwn.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          sign out
        </div>
      ) : (
        <Link to="/signin" className="option">
          Sign in
        </Link>
      )}
    </div>
  </div>
);

export default Header;
