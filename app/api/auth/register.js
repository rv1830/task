import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, role } = req.body;


    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({ username, password: hashedPassword, role });

    return res.status(201).json({ message: 'User registered successfully', user });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
