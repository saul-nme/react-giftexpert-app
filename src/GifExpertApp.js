import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp({ defaultCategories = [] }) {
   const [categories, setCategories] = useState(defaultCategories);

   function addCategories(value) {
      setCategories((s) => [value, ...s]);
   }

   return (
      <div>
         <h2>GifExpertApp</h2>
         <AddCategory addCategories={addCategories} />
         <hr />
         <ol>
            {
               categories.map((i, key) => (
                  <GifGrid
                     key={i}
                     category={i}
                  />
               ))
            }
         </ol>
      </div>
   )
}
