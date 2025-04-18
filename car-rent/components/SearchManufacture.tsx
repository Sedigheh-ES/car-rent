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

        <div className='sesarch-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className={'absolute top-[14px]'} >
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            alt="car logo"
                            className='ml-4'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className='search-manufacturer__input'
                        placeholder="Volkswagan"
                        displayValue={(manufacture) => manufacture}
                        onChange={(e) => setQeury(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQeury('')}
                    >
                        <Combobox.Options>
                            {filteredManufacturer.length === 0 && query !== "" &&
                                (
                                    <Combobox.Option
                                        value={query}
                                        className="search-manufacturer__option"
                                        >
                                        Create "{query}"
                                    </Combobox.Option>
                                ):
                            (
                                    filteredManufacturer.map((item) => (
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
                                {item}
                            </Combobox.Option>
                                )))
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture
