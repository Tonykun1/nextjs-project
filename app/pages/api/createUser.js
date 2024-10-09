import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const filePath = path.join(process.cwd(), 'data', 'users.json'); 

export default function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, age,  nickname,  role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(fileContent);

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
      age,
      city,
      nickname,
      hobbies,
      role,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: 'User created successfully', user: newUser });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
