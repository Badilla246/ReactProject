import React, { useState } from 'react';
import './App.css'

function ObjectUpdateComponent() {
  const initialCarState = {
    brand: '',
    model: '',
    year: ''
  };

  const [car, setCar] = useState(initialCarState);
  const [submitted, setSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar(prevCar => ({
      ...prevCar,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
    setSubmitted(false);
  };

  const handleDelete = () => {
    setCar(initialCarState); 
    setEditMode(true); 
    setSubmitted(false); 
  };

  return (
    <div className='center-content'>
      <h1>Car Details</h1>
      {editMode && (
        <>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              value={car.brand}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Model:
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Year:
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleInputChange}
            />
          </label>
        </>
      )}
      {editMode ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button> {/* Add delete button */}
        </>
      )}
      {submitted && (
        <div>
          <h2>Car Details:</h2>
          <p>Brand: {car.brand}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
        </div>
      )}
    </div>
  );
}

export default ObjectUpdateComponent;
