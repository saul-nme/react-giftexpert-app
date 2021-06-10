import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {

   const { data: images, loading } = useFetchGifts(category);

   return (
      <>
         <h3>{category}</h3>
         {loading && "Loading..."}
         <div className="card-grid ">
            {
               images.map((img) => (
                  <GifGridItem
                     key={img.id}
                     {...img}
                  />
               ))
            }
         </div>
      </>
   )
}
