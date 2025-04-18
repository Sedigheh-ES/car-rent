import { Combobox, Transition } from '@headlessui/react'
import { SearchManufactureProps } from '@/types'
import React from 'react'

const SearchManufacture = ({manufacture,setManufacture}:SearchManufactureProps) => {
  return (
      <div className='search-manufacturer'>
          <Combobox>
              <div className='relative w-full'></div>
          </Combobox>
    </div>
  )
}

export default SearchManufacture
