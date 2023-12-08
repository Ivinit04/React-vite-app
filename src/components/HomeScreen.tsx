
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondPageComponent from './SecondPage';
import DepartmentComponent from './Department';

const departmentsData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user details are present in local storage
    const userData = localStorage.getItem('userData');
    if (!userData) {
      // Redirect back to the first page with an alert
      alert('Please enter your details before accessing this page.');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Second Page!</h1>
      <SecondPageComponent />
      <DepartmentComponent departments={departmentsData}/>
    </div>
  );
};

export default HomeScreen;
