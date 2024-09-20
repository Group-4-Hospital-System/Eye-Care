// src/features/auth/authAPI.js
// import axios from 'axios';
// export const loginAPI = async (credentials) => {
//   const response = await axios.post('/api/auth/login', credentials);
//   return response.data;
// };

// export const registerAPI = async (userData) => {
//   const response = await axios.post('http://localhost:5000/api/auth/register', userData);
//   return response.data;
// };
///////////////////////////////////////////////////////////////////////
// import axios from 'axios';
// export const registerAPI = async (userData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', userData);
//       return response.data;
//     } catch (error) {
//       console.error('Error registering user:', error.response ? error.response.data : error.message);
//       throw error;
//     }
//   };
  

  import axios from 'axios';

// Login API
export const loginAPI = async (credentials) => {
  try {

    const response = await axios.post('http://localhost:5000/api/auth/login', credentials, {withCredentials: true});

    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Register API
// export const registerAPI = async (userData) => {
//   try {
//     const response = await axios.post('http://localhost:5000/api/auth/register', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error registering user:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// };

export const registerAPI = async (userData) => {
  try {

    const response = await axios.post('http://localhost:5000/api/auth/register', userData, {withCredentials: true });

    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};
