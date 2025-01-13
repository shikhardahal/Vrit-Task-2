import React, { useState } from "react";
import { formValidation, validateForm } from './formValidation';  // Correct the import here

// Example of a FormValidation component
const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    country: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const result = validateForm(formData);
    if (result.valid) {
      // Proceed with the form submission (e.g., send data to API)
      console.log('Form submitted successfully', formData);
    } else {
      // Set the errors if validation fails
      setErrors(result.errors);
    }
  };

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        {errors.gender && <p>{errors.gender}</p>}
      </div>

      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="India">India</option>
        </select>
        {errors.country && <p>{errors.country}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation; // Export as default
