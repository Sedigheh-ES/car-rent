"use client";

import React, { useState } from 'react'
import {SearchManufacture} from './';

const SearchBar = () => {
    const [manufacture, setManufacture] = useState('');

    const handleSearch = () => {      
       console.log("handle seaerch");
    }

  return (
      <form className='searchbar' onSubmit={handleSearch}>
          <div className='searchbar__item'>
              <SearchManufacture
                  manufacture={manufacture}
                  setManufacture={setManufacture}
              /> 
              
          </div>
          
     </form>
  )
}

export default SearchBar