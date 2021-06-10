import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifts";


export const useFetchGifts = (category) => {

   const [state, setState] = useState({
      data: [],
      loading: true,
   });

   useEffect(() => {
      getGift(category) .then((images) => {
         setState(() => ({
            data: images,
            loading: false,
         }));
      });
   }, [ category ]);

   return state;

}
