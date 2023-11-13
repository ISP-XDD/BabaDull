import React from 'react';

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const containerStyle = {
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    margin: 'auto',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '8px',
  };

  const inputStyle = {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const checkboxStyle = {
    marginTop: '8px',
  };

  const submitButtonStyle = {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
  };

  const submitButtonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Product Upload Form</h2>
      <form onSubmit={handleSubmit} action="/submit_product" method="post" style={formStyle}>
        {/* Product Name */}
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" required /><br />

        {/* Price */}
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" step="0.01" required /><br />

        {/* Picture URL (string) */}
        <label htmlFor="picture">Picture URL:</label>
        <input type="text" id="picture" name="picture" required /><br />

        {/* Count */}
        <label htmlFor="count">Count:</label>
        <input type="number" id="count" name="count" required /><br />

        {/* Weight */}
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" step="0.01" required /><br />

        {/* Manufacturer */}
        <label htmlFor="manufacturer">Manufacturer:</label>
        <input type="text" id="manufacturer" name="manufacturer" required /><br />

        {/* Warranty Year */}
        <label htmlFor="warranty_year">Warranty Year:</label>
        <input type="number" id="warranty_year" name="warranty_year" required /><br />

        {/* Description */}
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea><br />

        {/* Country of Origin */}
        <label htmlFor="country_of_origin">Country of Origin:</label>
        <input type="text" id="country_of_origin" name="country_of_origin" required /><br />

        {/* Model */}
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" required /><br />

        {/* Year of Manufacture */}
        <label htmlFor="year_of_manufacture">Year of Manufacture:</label>
        <input type="number" id="year_of_manufacture" name="year_of_manufacture" required /><br />

        {/* Is Active */}
        <label htmlFor="is_active">Is Active:</label>
        <input type="checkbox" id="is_active" name="is_active" defaultChecked /><br />

        {/* Submit Button */}
        <input type="submit" value="Submit" style={Object.assign({}, submitButtonStyle, submitButtonHoverStyle)} />
      </form>
    </div>
  );
};

export default Upload;
