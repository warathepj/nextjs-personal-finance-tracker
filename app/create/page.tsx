// app/create/page.tsx

//in app/create/page.tsx, when click submit button
// create name in database
// reference file lib/database.ts, pages/api/data.ts

'use client';

import React, { useState } from 'react';
import createName from '@/lib/database';

const CreatePage = () => {
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:585519983.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1860486869.

// ... your component code ...

   const handleSubmit = async (event: React.FormEvent) => {
     event.preventDefault();
     try {
       const response = await fetch('/api/data', {
         method:
 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name }),
       });

       if (response.ok) {
         // Handle success (e.g., show success message)
         console.log('Name created successfully!'); 
         setName('');
       } else {
         // Handle error (e.g., show error message)
         console.error('Failed to create name');
       }
     } catch (error) {
       console.error('Error:', error);
     }
   };

   // ... rest of your component code ...


  return (
    <div>
      <pre>{name}</pre>

      <form onSubmit={handleSubmit}> 
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} 
          onChange={(e) => setName(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;
