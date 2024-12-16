import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { NavLink } from 'react-router';
import Navbar from './Navbar';
import HeroComponent from './HeroComponent';
import AccountStatComponent from './AccountStatComponent';
import Table from './Table';

function App() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <AccountStatComponent />
      <Table />
    </>
  );
}

export default App;
