import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Replace with your authentication context

function AuthenticationButton() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  if (!isAuthenticated) {
    // User is not logged in
    return (
      <button onClick={login}>
        Login
      </button>
    );
  } else {
    // User is logged in
    return (
      <button onClick={logout}>
        Logout
      </button>
    );
  }
}

export default AuthenticationButton;
