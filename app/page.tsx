// app/page.tsx/
// from lib/database.ts, pages/api/data.ts, how to render data
// from mydb.sqlite, render in app/page.tsx/
"use client"
   import { useState, useEffect } from 'react';

   export default function Home() {
     const [data, setData] = useState([]);

     useEffect(() => {
       fetch('/api/data')
         .then(res => res.json())
         .then(data => setData(data));
     }, []);

     // ... render data
   }
