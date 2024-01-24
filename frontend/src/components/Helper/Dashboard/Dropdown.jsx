import React, { useState } from 'react';

const Dropdown() {
  const [formData, setFormData] = useState({
    selectedFruit: '',
    name: '',
    // Add more form fields as needed
  });

  const fruitOptions = ['Apple', 'Banana', 'Orange', 'Grape'];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDropdownChange = (event) => {
    setFormData({ ...formData, selectedFruit: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>My Form</h2>

      {/* Dropdown menu */}
      <label>
        Choose a fruit:
        <select name="selectedFruit" value={formData.selectedFruit} onChange={handleDropdownChange}>
          <option value="">Select a fruit</option>
          {fruitOptions.map((fruit, index) => (
            <option key={index} value={fruit.toLowerCase()}>
              {fruit}
            </option>
          ))}
        </select>
      </label>

    </form>
  );
}

export default Dropdown;
