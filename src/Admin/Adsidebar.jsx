import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">Admin</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/Adminproduct">Products</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/Addproduct">Add Product</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/adminuser">Users</Link>
        </li>
      </ul>
    </div>
    
  );
}

export default Sidebar;