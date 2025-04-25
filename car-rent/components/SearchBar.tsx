"use client";

import React, { useState } from 'react'
import SearchManufacture from './SearchManufacture';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { SearchBarProps } from '@/types';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button
        type='submit'
        className={`-ml-3 z-10 ${otherClasses}`}
    >
        <Image src="/magnifying-glass.svg" alt='magnifaying glass' width={40} height={40} className='object-contain' />
    </button>
        
);

const SearchBar = ({ setManuFacturer, setModel }: SearchBarProps) => {
    const [searchModel, setSearchModel] = useState("");
    const [searchManufacturer, setSearchManufacturer] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer.trim() === "" && searchModel.trim() === "")
            return alert("Please provide some input");

        setModel(searchModel);
        setManuFacturer(searchManufacturer);
    };

    
// const SearchBar = ({setManuFacturer, setModel}:SearchBarProps) => {
//     const [searchManufacture, setSearchManufacture] = useState("");
//     const [searchModel, setSearchModel] = useState("");
//     const router = useRouter();
    
//     const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         if (searchManufacture === "" && searchModel === "") {
//             return alert('please fill the search');
//         }
//           setModel(searchModel);
//           setManuFacturer(searchManufacture);
//         updateSearchParams(searchModel.toLowerCase() , searchManufacture.toLowerCase());
//     };

//     const updateSearchParams = (model:string, manufacture:string) => {
//         const searchParams = new URLSearchParams(window.location.search);

//         if (model) {
//             searchParams.set('model',model)
//         } else {
//             searchParams.delete('model')
//         }

//          if (manufacture) {
//             searchParams.set('manufacture',manufacture)
//         } else {
//             searchParams.delete('manufacture')
//          }
        
//         const newPathname = `${window.location.pathname}?${searchParams.toString()} `;
//          router.push(newPathname);
//     }

 

  return (
      <form className='searchbar' onSubmit={handleSearch}>
          <div className='searchbar__item'>
        <SearchManufacture
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>

          <div className='searchbar__item'>
              <Image
                  src="/model-icon.png"
                  alt="Model"
                  width={25}
                  height={25}
                  className='absolute h-[20px] w-[20px] ml-4'
              />
              <input
                  type="text"
                  name="model"
                  value={searchModel}
                  onChange={(e) => setSearchModel(e.target.value)}
                  placeholder='Tigun...'
                  className='searchbar__input'
              />
              <SearchButton otherClasses='sm:hidden'/>           
          </div>
          
             <SearchButton otherClasses='max-sm:hidden'/> 
          
     </form>
  )
}

export default SearchBar