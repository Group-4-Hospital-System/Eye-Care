// // src/features/auth/Register.js
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from './authSlice';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(register({ email, password, name }));
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Register;
////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from './authSlice';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState(''); // إضافة حقل الجنس
//   const [startTime, setStartTime] = useState(''); // إضافة حقل وقت البدء
//   const [endTime, setEndTime] = useState(''); // إضافة حقل وقت النهاية

//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(register({ email, password, name, gender, start_time: startTime, end_time: endTime }));
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <input
//           type="text"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           placeholder="Gender"
//         />
//         <input
//           type="text"
//           value={startTime}
//           onChange={(e) => setStartTime(e.target.value)}
//           placeholder="Start Time"
//         />
//         <input
//           type="text"
//           value={endTime}
//           onChange={(e) => setEndTime(e.target.value)}
//           placeholder="End Time"
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Register;
///////////////////////////////////////////////////////////
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from './authSlice';

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
