// src/FormComponent.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormComponent: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Validate form data (you can add more validation logic)
    if (formData.name && formData.phoneNumber && formData.email) {
      // Save user details to local storage
      localStorage.setItem('userData', JSON.stringify(formData));

      // Redirect to the second page
      navigate('/second-page');
    } else {
      alert('Please enter all details before submitting.');
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default FormComponent;
