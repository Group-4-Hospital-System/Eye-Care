
import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  // Use useEffect to redirect user after successful login based on role
  useEffect(() => {
    if (user) {
      // Check user's role and navigate accordingly
      if (user.role === 'admin') {
        navigate('/Front-End/src/pages/AdminDashboard.jsx');
      } else if (user.role === 'doctor') {
        navigate('/Front-End/src/pages/ProfilePage.jsx');
      } else {
        navigate('/home'); // Default page for other roles
      }
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;



// // import { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { login } from './authSlice';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion'; // Import Framer Motion

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const dispatch = useDispatch();
// //   const { loading, error, user } = useSelector((state) => state.auth);
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(login({ email, password }));
// //   };

// //   // Use useEffect to redirect user after successful login based on role
// //   useEffect(() => {
// //     if (user) {
// //       // Check user's role and navigate accordingly
// //       if (user.role === 'admin') {
// //         navigate('/Front-End/src/pages/AdminDashboard.jsx');
// //       } else if (user.role === 'doctor') {
// //         navigate('/Front-End/src/pages/ProfilePage.jsx');
// //       } else {
// //         navigate('/home'); // Default page for other roles
// //       }
// //     }
// //   }, [user, navigate]);

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <motion.div
// //         className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
// //         initial={{ opacity: 0, y: 50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6, ease: 'easeOut' }}
// //       >
// //         <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="flex flex-col">
// //             <label htmlFor="email" className="mb-1 text-sm text-gray-600">Email</label>
// //             <motion.input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Enter your email"
// //               className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //               whileFocus={{ scale: 1.02 }}
// //               transition={{ duration: 0.3 }}
// //             />
// //           </div>

// //           <div className="flex flex-col">
// //             <label htmlFor="password" className="mb-1 text-sm text-gray-600">Password</label>
// //             <motion.input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Enter your password"
// //               className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //               whileFocus={{ scale: 1.02 }}
// //               transition={{ duration: 0.3 }}
// //             />
// //           </div>

// //           <motion.button
// //             type="submit"
// //             disabled={loading}
// //             className={`w-full py-2 font-bold text-white transition-colors duration-300 rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
// //             whileHover={{ scale: loading ? 1 : 1.03 }}
// //             whileTap={{ scale: 0.98 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             {loading ? 'Logging in...' : 'Login'}
// //           </motion.button>
// //         </form>

// //         {error && (
// //           <motion.p
// //             className="mt-4 text-sm text-red-500"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             {error}
// //           </motion.p>
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Login;


// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './authSlice';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // Import Framer Motion

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { loading, error, user } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };

//   // Use useEffect to redirect user after successful login based on role
//   useEffect(() => {
//     if (user) {
//       // Check user's role and navigate accordingly
//       if (user.role === 'admin') {
//         navigate('/Front-End/src/pages/AdminDashboard.jsx');
//       } else if (user.role === 'doctor') {
//         navigate('/Front-End/src/pages/ProfilePage.jsx');
//       } else {
//         navigate('/home'); // Default page for other roles
//       }
//     }
//   }, [user, navigate]);

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <motion.div
//         className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//       >
//         <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex flex-col">
//             <label htmlFor="email" className="mb-1 text-sm text-gray-600">Email</label>
//             <motion.input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="password" className="mb-1 text-sm text-gray-600">Password</label>
//             <motion.input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               whileFocus={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>

//           <motion.button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 font-bold text-white transition-colors duration-300 rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
//             whileHover={{ scale: loading ? 1 : 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             transition={{ duration: 0.3 }}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </motion.button>
//         </form>

//         {error && (
//           <motion.p
//             className="mt-4 text-sm text-red-500"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {error}
//           </motion.p>
//         )}

//         <motion.p
//           className="mt-4 text-center text-sm text-gray-600"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           Don't have an account?{' '}
//           <Link to="/register" className="text-blue-500 hover:underline">
//             Sign Up Now
//           </Link>
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;
