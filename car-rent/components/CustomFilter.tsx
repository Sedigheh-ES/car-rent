"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps} from '@/types';
import { updateSearchParams } from '@/utils';


const CustomFilter= ({title,options,setFilter}:CustomFilterProps<T>) => {
     const router = useRouter();
     const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e:{title:string, value:string}) => {
    const newPathName = updateSearchParams(title,e.value.toLowerCase());
    router.push(newPathName);
  }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }} 
    >
        <div className='relative w-fit z-10'></div>
        <Listbox.Button className='custom-filter__btn'>
          <span>{selected.title}</span>
          <Image
            src="./chevron-up-down.svg"
            alt="Chevron"
            width={20}
            height={20}
            className='ml-4 object-contain'
          />
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        
        >
          <Listbox.Options
           className="custom-filter__options"
          >
            {options.map((option) => (
              <Listbox.Option
                key={option.title}
                value={option}
                className={({active})=>`relative cursor-default py-2 px-4 select-none ${active ? 'bg-primary-blue text-white':'text-gray-900'}`}
              >
                {({ selected }) => (
                  <span  className={`block truncate font-medium ${selected ? 'font-medium' : 'font-normal'}`}>{option.title }</span>
                  
                )}
              </Listbox.Option>
            ))}
            
           </Listbox.Options>
        </Transition>
     </Listbox>
    </div>
  )
}

export default CustomFilter