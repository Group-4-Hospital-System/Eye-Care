
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/authSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState(''); // Added gender
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password, name, gender })); // Include gender
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;






// // import { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { register } from './authSlice';
// // import { motion } from 'framer-motion';
// // import { Link } from 'react-router-dom'; // Import Link for navigation

// // const Register = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [name, setName] = useState('');
// //   const [gender, setGender] = useState('');
// //   const dispatch = useDispatch();
// //   const { loading, error } = useSelector((state) => state.auth);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(register({ email, password, name, gender }));
// //   };

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: -50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.5 }}
// //       className="flex justify-center items-center h-screen bg-gray-100"
// //     >
// //       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
// //         <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
// //           Register
// //         </h1>
// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <motion.input
// //             whileFocus={{ scale: 1.05 }}
// //             transition={{ type: 'spring', stiffness: 300 }}
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Name"
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //           <motion.input
// //             whileFocus={{ scale: 1.05 }}
// //             transition={{ type: 'spring', stiffness: 300 }}
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Email"
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //           <motion.input
// //             whileFocus={{ scale: 1.05 }}
// //             transition={{ type: 'spring', stiffness: 300 }}
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Password"
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //           <motion.input
// //             whileFocus={{ scale: 1.05 }}
// //             transition={{ type: 'spring', stiffness: 300 }}
// //             type="text"
// //             value={gender}
// //             onChange={(e) => setGender(e.target.value)}
// //             placeholder="Gender"
// //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             transition={{ type: 'spring', stiffness: 300 }}
// //             type="submit"
// //             disabled={loading}
// //             className={`w-full py-3 rounded-lg text-white font-bold transition-all ${
// //               loading
// //                 ? 'bg-gray-400 cursor-not-allowed'
// //                 : 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400'
// //             }`}
// //           >
// //             {loading ? 'Registering...' : 'Register'}
// //           </motion.button>
// //         </form>
// //         {error && (
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.3 }}
// //             className="text-red-500 text-sm mt-3 text-center"
// //           >
// //             {error}
// //           </motion.p>
// //         )}

// //         {/* Sign Up Now Section */}
// //         <div className="mt-6 text-center">
// //           <p className="text-gray-600">
// //             Already have an account?{' '}
// //             <Link to="/login" className="text-blue-500 hover:underline">
// //               Log in here
// //             </Link>
// //           </p>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Register;



// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from './authSlice';
// import { motion } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const dispatch = useDispatch();
//   const { loading, error, user } = useSelector((state) => state.auth); // Add user to check registration status
//   const navigate = useNavigate(); // Initialize navigate

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(register({ email, password, name, gender }));
//   };

//   // Use useEffect to navigate after successful registration
//   useEffect(() => {
//     if (user && !loading && !error) {
//       navigate('/login'); // Navigate to login after successful registration
//     }
//   }, [user, loading, error, navigate]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="flex justify-center items-center h-screen bg-gray-100"
//     >
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
//           Register
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <motion.input
//             whileFocus={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <motion.input
//             whileFocus={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <motion.input
//             whileFocus={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <motion.input
//             whileFocus={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             type="text"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             placeholder="Gender"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 rounded-lg text-white font-bold transition-all ${
//               loading
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400'
//             }`}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </motion.button>
//         </form>
//         {error && (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             className="text-red-500 text-sm mt-3 text-center"
//           >
//             {error}
//           </motion.p>
//         )}

//         {/* Sign Up Now Section */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Log in here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Register;
