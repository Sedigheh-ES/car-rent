import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit"
};

export interface SearchManufactureProps{
    manufacture: string;
    setManufacture:(manufacture: string)=>void
}

export interface CarProps{
    city_mpg:string;
class:string;
combination_mpg:string;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:string;
make:string;
model:string;
transmission:string;
year:number;
}