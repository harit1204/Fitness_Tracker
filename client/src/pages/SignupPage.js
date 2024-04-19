import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';


const BASE_URL = 'http://localhost:3000/users'; // Replace with your actual backend URL

function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    weight: '',
    height: '',
    diet: '',
    address: '',
    ethnicity: '',
    residence: '',
    country: '',
    state: '',
    city: '',
    familyDoctor: '',
    emergencyContactPersonName: '',
    emergencyContact: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/createUser`, { // Use the /createUser endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // formData should contain the user data
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Signup failed');
      } else {
        // Redirect to login page upon successful signup
        window.location = '/login';
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        {/* Input fields for email, password */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* Input fields for profile generation */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
        />
        <input
          type="number"
          name="height"
          placeholder="Height (feet)"
          value={formData.height}
          onChange={handleChange}
        />
        <div className="radio-box">
          <label>Diet:</label>
          <input
            type="radio"
            id="veg"
            name="diet"
            value="veg"
            checked={formData.diet === 'veg'}
            onChange={handleChange}
          />
          <label htmlFor="veg">Veg</label>
          <input
            type="radio"
            id="nonveg"
            name="diet"
            value="nonveg"
            checked={formData.diet === 'nonveg'}
            onChange={handleChange}
          />
          <label htmlFor="nonveg">Non-Veg</label>
        </div>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ethnicity"
          placeholder="Ethnicity"
          value={formData.ethnicity}
          onChange={handleChange}
        />
        <input
          type="text"
          name="residence"
          placeholder="Residence"
          value={formData.residence}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="familyDoctor"
          placeholder="Family Doctor"
          value={formData.familyDoctor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emergencyContactPersonName"
          placeholder="Emergency Contact Person Name"
          value={formData.emergencyContactPersonName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="emergencyContact"
          placeholder="Emergency Contact (Mobile Number)"
          value={formData.emergencyContact}
          onChange={handleChange}
        />
        {/* Display error message if signup fails */}
        {error && <p className="error-message">{error}</p>}
        {/* Signup button */}
        <button type="submit">Sign Up</button>
      </form>
      {/* Link to login page */}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignupPage;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import bcrypt from 'bcryptjs'; // Import bcryptjs for password hashing
// import './SignupPage.css';

// const BASE_URL = 'http://localhost:3000/users'; // Replace with your actual backend URL

// function SignupPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     weight: '',
//     height: '',
//     diet: '',
//     address: '',
//     ethnicity: '',
//     residence: '',
//     country: '',
//     state: '',
//     city: '',
//     familyDoctor: '',
//     emergencyContactPersonName: '',
//     emergencyContact: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const hashedPassword = await hashPassword(formData.password);
//       const response = await fetch(`${BASE_URL}/createUser`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...formData, password: hashedPassword }),
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.error || 'Signup failed');
//       } else {
//         window.location = '/login';
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setError('An unexpected error occurred');
//     }
//   };

//   const hashPassword = async (password) => {
//     const saltRounds = 10;
//     return await bcrypt.hash(password, saltRounds);
//   };

//   return (
//     <div className="signup-page">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           name="weight"
//           placeholder="Weight (kg)"
//           value={formData.weight}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           name="height"
//           placeholder="Height (feet)"
//           value={formData.height}
//           onChange={handleChange}
//         />
//         <div className="radio-box">
//           <label>Diet:</label>
//           <input
//             type="radio"
//             id="veg"
//             name="diet"
//             value="veg"
//             checked={formData.diet === 'veg'}
//             onChange={handleChange}
//           />
//           <label htmlFor="veg">Veg</label>
//           <input
//             type="radio"
//             id="nonveg"
//             name="diet"
//             value="nonveg"
//             checked={formData.diet === 'nonveg'}
//             onChange={handleChange}
//           />
//           <label htmlFor="nonveg">Non-Veg</label>
//         </div>
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="ethnicity"
//           placeholder="Ethnicity"
//           value={formData.ethnicity}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="residence"
//           placeholder="Residence"
//           value={formData.residence}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="country"
//           placeholder="Country"
//           value={formData.country}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="state"
//           placeholder="State"
//           value={formData.state}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="city"
//           placeholder="City"
//           value={formData.city}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="familyDoctor"
//           placeholder="Family Doctor"
//           value={formData.familyDoctor}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="emergencyContactPersonName"
//           placeholder="Emergency Contact Person Name"
//           value={formData.emergencyContactPersonName}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="emergencyContact"
//           placeholder="Emergency Contact (Mobile Number)"
//           value={formData.emergencyContact}
//           onChange={handleChange}
//         />
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Login</Link></p>
//     </div>
//   );
// }

// export default SignupPage;
