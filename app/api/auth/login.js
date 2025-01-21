// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = 'your-secret-key'; 

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, password } = req.body;

    
//     const user = await getUserByUsername(username); 
//     if (!user) return res.status(401).json({ message: 'User not found' });

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

    
//     const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

//     return res.status(200).json({ token });
//   } else {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
