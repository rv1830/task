// import jwt from 'jsonwebtoken';

// const JWT_SECRET = 'your-secret-key'; 

// export default function handler(req, res) {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     return res.status(200).json({ user: decoded });
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid or expired token' });
//   }
// }
