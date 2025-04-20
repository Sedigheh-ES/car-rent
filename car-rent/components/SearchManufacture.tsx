"use client";
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufactureProps } from '@/types';
import React, { Fragment, useState } from 'react';
import { manufacturers } from '@/constants';
import Image from 'next/image';

const SearchManufacture = ({ manufacture, setManufacture }: SearchManufactureProps) => {
    const [query, setQeury] = useState('');
    const filteredManufacturer =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) => (
                item.toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, "")
                    )
            ))

    return (

        <div className='search-manufacturer'>
            <Combobox value={manufacture}  onChange={setManufacture}>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            alt="car logo"
                            className='ml-4'
                        />
                    </Combobox.Button>

                    {/* Input field for searching */}
                    <Combobox.Input
                        className='search-manufacturer__input'
                        placeholder="Volkswagan"
                        displayValue={(manufacture) => manufacture}
                        onChange={(e) => setQeury(e.target.value)}
                    />

                       {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQeury('')}
                    >

                        <Combobox.Options>
                            {filteredManufacturer.map((item) => (
                               <Combobox.Option
                                key={item}
                                className={
                                     ({ active }) =>
                                    `relative search-manufacturer__option 
                                     ${active ?"bg-primary-blue text-white"
                                        :"text-gray-900"}`
                                      }
                                value={item}
                                 >
                                   {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                            </Combobox.Option>
                                ))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture
