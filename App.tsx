import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoice</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}
