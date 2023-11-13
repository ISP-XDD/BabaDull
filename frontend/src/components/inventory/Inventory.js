import React from 'react';
import {Route, Link} from "react-router-dom"

const Inventory = () => {
  const productStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '15px',
  };
  const centerStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Product Inventory</h2>

      {/* Pvz 1 */}
      <div style={productStyle}>
        <h3>Pvz 1</h3>
        <p>Description</p>
        <p>$19.99</p>
      </div>

      {/* Pvz 2 */}
      <div style={productStyle}>
        <h3>Pvz 2</h3>
        <p>Description</p>
        <p>$29.99</p>
      </div>

      {/* Pvz 3 */}
      <div style={productStyle}>
        <h3>Pvz 3</h3>
        <p>Description</p>
        <p>$39.99</p>
      </div>
     {/* Button to Inventory Edit using Link */}
     <div style={centerStyle}>
        <Link to="/inventory/edit">
          <button>Edit Inventory</button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
