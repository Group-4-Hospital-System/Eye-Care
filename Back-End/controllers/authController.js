// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../config/db'); // PostgreSQL connection

// // Register controller
// exports.register = async (req, res) => {
//   const { name, email, password, gender, start_time, end_time } = req.body;
//   try {
//     // Check if email already exists
//     const { rows: userExists } = await db.query(
//       'SELECT * FROM users WHERE email = $1',
//       [email]
//     );
//     if (userExists.length) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new patient (role = 'patient')
//     const { rows: newUser } = await db.query(
//       `INSERT INTO users (name, email, password, role, gender, start_time, end_time) 
//       VALUES ($1, $2, $3, 'patient', $4, $5, $6) RETURNING *`,
//       [name, email, hashedPassword, gender, start_time, end_time]
//     );

//     // Generate JWT token
//     const token = jwt.sign({ userId: newUser[0].user_id, role: newUser[0].role }, 'your_jwt_secret', { expiresIn: '1h' });

//     // Set cookie and send response
//     res.cookie('token', token, { httpOnly: true });
//     return res.status(201).json({ user: newUser[0], token });
//   } catch (err) {
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       // Check if user exists
//       const { rows: user } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
//       if (!user.length) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }
  
//       // Compare password
//       const validPassword = await bcrypt.compare(password, user[0].password);
//       if (!validPassword) {
//         return res.status(400).json({ message: 'Invalid email or password' });
//       }
  
//       // Generate JWT token
//       const token = jwt.sign({ userId: user[0].user_id, role: user[0].role }, 'your_jwt_secret', { expiresIn: '1h' });
  
//       // Set cookie and send response
//       res.cookie('token', token, { httpOnly: true });
//       res.status(200).json({ user: user[0], token });
//     } catch (err) {
//       return res.status(500).json({ message: 'Server error' });
//     }
//   };
/////////////////////////////////////////////////////////
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../config/db'); // PostgreSQL connection

// // Register controller
// exports.register = async (req, res) => {
// //   const { name, email, password, gender, start_time, end_time } = req.body;
// //   try {
// //     // Validate input
// //     if (!name || !email || !password || !gender || !start_time || !end_time) {
// //       return res.status(400).json({ message: 'All fields are required' });
// //     }

// //     // Check if email already exists
// //     const { rows: userExists } = await db.query(
// //       'SELECT * FROM users WHERE email = $1',
// //       [email]
// //     );
// //     if (userExists.length) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Insert new user
// //     const { rows: newUser } = await db.query(
// //       `INSERT INTO users (name, email, password, role, gender, start_time, end_time) 
// //       VALUES ($1, $2, $3, 'patient', $4, $5, $6) RETURNING *`,
// //       [name, email, hashedPassword, gender, start_time, end_time]
// //     );

// //     // Generate JWT token
// //     const token = jwt.sign({ userId: newUser[0].user_id, role: newUser[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });

// //     // Set cookie and send response
// //     res.cookie('token', token, { httpOnly: true });
// //     return res.status(201).json({ user: newUser[0], token });
// //   } catch (err) {
// //     console.error('Error in register:', err.message);
// //     return res.status(500).json({ message: 'Server error' });
// //   }
// const { name, email, password, gender } = req.body;
// try {
//   // Check if email already exists
//   const { rows: userExists } = await db.query(
//     'SELECT * FROM users WHERE email = $1',
//     [email]
//   );
//   if (userExists.length) {
//     return res.status(400).json({ message: 'User already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Insert new user (role = 'patient')
//   const { rows: newUser } = await db.query(
//     `INSERT INTO users (name, email, password, role, gender) 
//     VALUES ($1, $2, $3, 'patient', $4) RETURNING *`,
//     [name, email, hashedPassword, gender]
//   );

//   // Generate JWT token
//   const token = jwt.sign({ userId: newUser[0].user_id, role: newUser[0].role }, 'your_jwt_secret', { expiresIn: '1h' });

//   // Set cookie and send response
//   res.cookie('token', token, { httpOnly: true });
//   return res.status(201).json({ user: newUser[0], token });
// } catch (err) {
//   return res.status(500).json({ message: 'Server error' });
// }

// };

// // Login controller
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Validate input
//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password are required' });
//     }

//     // Check if user exists
//     const { rows: user } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
//     if (!user.length) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Compare password
//     const validPassword = await bcrypt.compare(password, user[0].password);
//     if (!validPassword) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: user[0].user_id, role: user[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Set cookie and send response
//     res.cookie('token', token, { httpOnly: true });
//     res.status(200).json({ user: user[0], token });
//   } catch (err) {
//     console.error('Error in login:', err.message);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };
////////////////////////////////////////////////////////////////////
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // PostgreSQL connection

// Register controller
exports.register = async (req, res) => {
  const { name, email, password, gender } = req.body;
  try {
    // Validate input
    if (!name || !email || !password || !gender) {
      return res.status(400).json({ message: 'Name, email, password, and gender are required' });
    }

    // Check if email already exists
    const { rows: userExists } = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    if (userExists.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const { rows: newUser } = await db.query(
      `INSERT INTO users (name, email, password, role, gender) 
      VALUES ($1, $2, $3, 'patient', $4) RETURNING *`,
      [name, email, hashedPassword, gender]
    );

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser[0].user_id, role: newUser[0].role },
      process.env.JWT_SECRET || 'your_jwt_secret', // Use environment variable for the secret
      { expiresIn: '1h' }
    );

    // Set cookie and send response
    res.cookie('token', token, { httpOnly: true });
    return res.status(201).json({ user: newUser[0], token });
  } catch (err) {
    console.error('Error in register:', err.message);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user exists
    const { rows: user } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (!user.length) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user[0].user_id, role: user[0].role },
      process.env.JWT_SECRET || 'your_jwt_secret', // Use environment variable for the secret
      { expiresIn: '1h' }
    );

    // Set cookie and send response
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ user: user[0], token });
  } catch (err) {
    console.error('Error in login:', err.message);
    return res.status(500).json({ message: 'Server error' });
  }
};
