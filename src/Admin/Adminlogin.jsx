import React, { useContext, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/context';
import './Adminlogin.css'

function Adminlogin() {
  const { admin, setAdmin } = useContext(Mycontext);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (nameValue === 'admin' && passwordValue === 'admin123') {
      navigate('/Adminproduct');
      alert('Admin Login successful');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2 className="admin-login-heading">Admin Login</h2>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="Username" className="admin-login-input" />
        <br />
        <input type="password" ref={passwordRef} placeholder="Password" className="admin-login-input" />
        <br />
        <button type="submit" className="admin-login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Adminlogin;