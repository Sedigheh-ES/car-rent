import { CarProps, FilterProps } from "@/types";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export async function fetchCars(filters:FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
        'x-rapidapi-key': 'fc1584a21dmsh925737ce34dd977p146504jsn8bfc3b7a5db3',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

  // const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    {
        headers: headers,
    });

    const result = await response.json();
    return result;
}

export const calculateCarRent = (cylinders: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = cylinders * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('zoomLevel', 'zoomLevel');
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search); 
  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
  
}