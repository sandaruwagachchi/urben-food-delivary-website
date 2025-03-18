import React from 'react';
import { Route, Routes } from 'react-router';
import './Supplier.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.webp';
import Sidebar from '../../components/Sidebar/Sidebar';
import Add from '../../Pages/SPanel/Add/Add';
import List from '../../Pages/SPanel/List/List';
import Orders from '../../Pages/SPanel/Orders/Orders';

const Supplier = () => {
  return (
    <div>
      <div className="navbars">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Supplier Panel</h3>
        <img src={profile} alt="Profile" className="profile" />
      </div>
      <hr />
      <div className="app-content">
        <Sidebar />
        <div className="supplier-content">
          <Routes>
            <Route path="list" element={<List />} />
            <Route path="add" element={<Add />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
