import React from 'react';
import { NavLink } from 'react-router';
import './Sidebar.css';
import add from '../../assets/add_icon.png';
import order from '../../assets/order_icon.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/supplier/add" className="sidebar-option">
          <img src={add} alt="Add Items" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/supplier/list" className="sidebar-option">
          <img src={order} alt="List Items" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/supplier/orders" className="sidebar-option">
          <img src={order} alt="Orders" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
