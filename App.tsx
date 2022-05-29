import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

export default function App() {
  const activeHandler = ({ isActive }) => {
    return isActive ? 'red' : 'blue';
  };

  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : 'blue' };
          }}
          to="/About"
        >
          About
        </NavLink>{' '}
        |{' '}
        <NavLink
          className={({ isActive }) => (isActive ? 'red' : 'blue')}
          to="/Invoices"
        >
          Invoices
        </NavLink>{' '}
        |{' '}
        <NavLink className={activeHandler} to="/Expenses">
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
