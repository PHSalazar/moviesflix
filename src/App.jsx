import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';
import './components/mobile.css';

function App() {
  // const setActive = () => {
  //   const links = document.querySelectorAll('#menu li a');
  //   links.forEach((link) => link.classList.remove('active'));
  //   const ele = document.querySelector(
  //     `.navbar #menu li a[data-prop=${document.name}]`,
  //   );
  //   ele && ele.classList.add('active');
  // };
  // useEffect(() => {
  //   setActive();
  // }, []);
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
