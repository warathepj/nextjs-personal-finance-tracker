// pages/api/users.js
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3013434252.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:648204102.

import { NextApiRequest, NextApiResponse } from 'next';
   import Database from 'better-sqlite3';

   const db = new Database('mydb.sqlite'); // Initialize your database

   export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     if (req.method === 'POST') {
       try {
         const { name } = req.body;
         const stmt = db.prepare('INSERT INTO names (name) VALUES (?)');
         stmt.run(name);
         res.status(200).json({ message: 'Name created successfully' });
       } catch (error) {
         res.status(500).json({ error: 'Failed to create name' });
       }
     } else {
       res.status(405).end(); // Method Not Allowed
     }
   }
