import React from 'react'

const productStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '15px',
  };

const InventoryEdit = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Product editing</h2>

{/* Pvz 1 */}
<div style={productStyle}>
  <h3>Pvz 1</h3>
  <p>Description</p>
  <p>$19.99</p>
</div>
    </div>
  )
}

export default InventoryEdit
