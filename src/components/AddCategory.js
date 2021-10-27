import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddCategory({ addCategories }) {
   const [inputValue, setInputValue] = useState("");

   function handleInputChange(e) {
      setInputValue(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log("handle submit", inputValue);
      if (inputValue.trim().length > 2) {
         addCategories(inputValue);
         setInputValue("");
      }
   }
   return (
      <form onSubmit={handleSubmit}>
         <h2>Add Category</h2>
         <p>{inputValue}</p>
         <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
         />
      </form>
   )
}


AddCategory.propTypes = {
   addCategories: PropTypes.func.isRequired,
}

AddCategory.defaultProps = {
}