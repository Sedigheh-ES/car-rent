import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
};




export interface SearchManufactureProps {
    manufacture: string;
    setManufacture: (manufacture: string) => void
}
export interface SearchBarProps {
  setManuFacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: string;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: string;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps{
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}



export interface HomeProps {
  searchParams: FilterProps;
}
export interface OptionProps{
    title: string;
    value: string;
        
}
export interface CustomFilterProps<T>{
    title: string;
    options: OptionProps[];
     setFilter: (selected: T) => void;
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchManufactureProps {
  selected: string;
  setSelected: (selected: string) => void;
}

